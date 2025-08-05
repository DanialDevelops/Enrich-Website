const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration - allow all origins for now to debug
app.use(cors({
  origin: true, // Allow all origins
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Security middleware (after CORS to avoid conflicts)
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" }
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: {
    error: 'Too many requests from this IP, please try again later.'
  }
});

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Root endpoint for testing
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Enrich Employment Backend is running!',
    timestamp: new Date().toISOString(),
    endpoints: [
      '/api/test',
      '/api/health', 
      '/api/test-cors',
      '/api/contact'
    ]
  });
});

// Contact form endpoint
app.post('/api/contact', limiter, [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters'),
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),
  body('phone')
    .trim()
    .isLength({ min: 10, max: 20 })
    .withMessage('Please provide a valid phone number'),
  body('message')
    .trim()
    .isLength({ min: 10, max: 2000 })
    .withMessage('Message must be between 10 and 2000 characters')
], async (req, res) => {
  // Add explicit CORS headers
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { name, email, phone, message } = req.body;

    // Check if email credentials are configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Email credentials not configured');
      return res.status(500).json({
        success: false,
        message: 'Email service not configured. Please contact administrator.'
      });
    }

    console.log('Creating Gmail transporter...');
    
    // Create email transporter for Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS // This should be your Gmail app password
      }
    });

    // Verify transporter configuration
    console.log('Verifying Gmail transporter...');
    await transporter.verify();
    console.log('Gmail transporter verified successfully');

    // Email to Enrich Employment (multiple recipients)
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: ['danial@enrichemployment.ca', 'ahtisham@enrichemployment.ca'],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1B5D4F;">New Contact Form Submission</h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 5px; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 14px;">
            This message was sent from the Enrich Employment contact form.
          </p>
        </div>
      `
    };

    console.log('Sending notification email via Gmail...');
    // Send email
    await transporter.sendMail(mailOptions);
    console.log('Notification email sent successfully via Gmail');

    // Send confirmation email to user
    const confirmationMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Enrich Employment',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1B5D4F;">Thank you for contacting us!</h2>
          <p>Dear ${name},</p>
          <p>Thank you for reaching out to Enrich Employment. We have received your message and will get back to you within 24 hours.</p>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1B5D4F;">Your Message:</h3>
            <div style="background-color: white; padding: 15px; border-radius: 5px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p>If you have any urgent inquiries, please call us at <strong>(905) 965-0448</strong>.</p>
          <p>Best regards,<br>The Enrich Employment Team</p>
        </div>
      `
    };

    console.log('Sending confirmation email via Gmail...');
    await transporter.sendMail(confirmationMailOptions);
    console.log('Confirmation email sent successfully via Gmail');

    res.status(200).json({
      success: true,
      message: 'Message sent successfully! We\'ll get back to you within 24 hours.'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    
    // Provide more specific error messages for Gmail
    let errorMessage = 'Failed to send message. Please try again later.';
    
    if (error.code === 'EAUTH') {
      errorMessage = 'Gmail authentication failed. Please check your app password. Make sure you generated an app password for "Mail" in your Google account settings.';
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Unable to connect to Gmail server. Please try again later.';
    } else if (error.code === 'ETIMEDOUT') {
      errorMessage = 'Email request timed out. Please try again later.';
    } else if (error.message && error.message.includes('Invalid login')) {
      errorMessage = 'Invalid Gmail credentials. Please check your email and app password.';
    }
    
    res.status(500).json({
      success: false,
      message: errorMessage,
      debug: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  console.log('Health check endpoint hit');
  console.log('Environment variables:', {
    EMAIL_USER: process.env.EMAIL_USER ? 'Set' : 'Not set',
    EMAIL_PASS: process.env.EMAIL_PASS ? 'Set' : 'Not set',
    PORT: process.env.PORT || 5000
  });
  
  res.status(200).json({
    success: true,
    message: 'Enrich Employment API is running',
    timestamp: new Date().toISOString(),
    emailConfigured: !!(process.env.EMAIL_USER && process.env.EMAIL_PASS),
    emailUser: process.env.EMAIL_USER ? `${process.env.EMAIL_USER.substring(0, 3)}***@${process.env.EMAIL_USER.split('@')[1]}` : 'Not configured',
    port: process.env.PORT || 5000
  });
});

// Simple test endpoint
app.get('/api/test', (req, res) => {
  console.log('Test endpoint hit');
  res.status(200).json({
    success: true,
    message: 'Server is working!',
    timestamp: new Date().toISOString()
  });
});

// Test CORS endpoint
app.get('/api/test-cors', (req, res) => {
  console.log('CORS test request received from:', req.headers.origin);
  res.status(200).json({
    success: true,
    message: 'CORS test successful',
    origin: req.headers.origin,
    timestamp: new Date().toISOString()
  });
});

// OPTIONS handler for contact endpoint
app.options('/api/contact', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.status(200).end();
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Enrich Employment API server running on port ${PORT}`);
  console.log(`📧 Email notifications enabled: ${process.env.EMAIL_USER ? 'Yes' : 'No'}`);
  console.log(`🌐 Server URL: https://enrich-website-production.up.railway.app`);
  console.log(`📋 Available endpoints:`);
  console.log(`   - GET  /api/test`);
  console.log(`   - GET  /api/health`);
  console.log(`   - GET  /api/test-cors`);
  console.log(`   - POST /api/contact`);
  console.log(`   - OPTIONS /api/contact`);
  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    console.log(`📧 Using Gmail service for: ${process.env.EMAIL_USER}`);
  } else {
    console.log('⚠️  Warning: Email credentials not configured. Contact form will not work.');
  }
}); 