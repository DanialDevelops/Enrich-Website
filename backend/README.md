# Enrich Employment Backend API

Backend API for the Enrich Employment contact form, built with Node.js and Express.

## Features

- Contact form submission handling
- Email notifications to Enrich Employment
- Confirmation emails to users
- Input validation and sanitization
- Rate limiting to prevent spam
- Security headers with Helmet
- CORS configuration
- Error handling

## Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Environment Configuration

Copy the example environment file and configure your settings:

```bash
cp env.example .env
```

Edit `.env` with your actual values:

```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
```

### 3. Email Setup (Gmail)

To use Gmail for sending emails:

1. Enable 2-Step Verification on your Google Account
2. Go to Security > App passwords
3. Generate a new app password for "Mail"
4. Use this app password in your `.env` file

### 4. Start the Server

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### POST /api/contact

Submit a contact form message.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'm interested in your services."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully! We'll get back to you within 24 hours."
}
```

### GET /api/health

Health check endpoint.

**Response:**
```json
{
  "success": true,
  "message": "Enrich Employment API is running",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Security Features

- Rate limiting: 5 requests per 15 minutes per IP
- Input validation and sanitization
- Security headers with Helmet
- CORS protection
- Request size limits

## Error Handling

The API returns appropriate HTTP status codes and error messages:

- `400` - Validation errors
- `429` - Rate limit exceeded
- `500` - Server errors

## Frontend Integration

Update your frontend Contact component to use the API:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    
    const result = await response.json();
    
    if (result.success) {
      toast({
        title: "Message sent successfully!",
        description: result.message,
      });
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast({
        title: "Error",
        description: result.message,
        variant: "destructive"
      });
    }
  } catch (error) {
    toast({
      title: "Error",
      description: "Failed to send message. Please try again.",
      variant: "destructive"
    });
  }
};
``` 