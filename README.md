# Enrich Employment Website

A professional staffing solutions website built with modern web technologies.

## Features

- **Responsive Design**: Mobile-first approach with beautiful UI
- **Contact Form**: Integrated backend with email notifications
- **Testimonials**: Customer feedback carousel
- **Professional Branding**: Custom logo and branding
- **Modern UI**: Built with shadcn/ui components
- **Fast Performance**: Optimized with Vite

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **UI Components**: shadcn/ui, Radix UI
- **Styling**: Tailwind CSS
- **Backend**: Node.js, Express
- **Email**: Nodemailer with Gmail
- **Routing**: React Router DOM

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Gmail account for email functionality

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Enrich-Employment
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

4. **Set up environment variables**
   ```bash
   # In backend folder, copy env.example to .env
   cp env.example .env
   ```
   
   Edit `.env` with your Gmail credentials:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-gmail-app-password
   ```

5. **Start the development servers**
   ```bash
   # Terminal 1 - Frontend
   npm run dev
   
   # Terminal 2 - Backend
   cd backend
   npm run dev
   ```

6. **Open your browser**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## Gmail Setup

To enable email functionality:

1. Enable 2-Step Verification on your Google Account
2. Generate an App Password:
   - Go to Google Account Settings → Security
   - Click "App passwords"
   - Select "Mail" and generate a 16-character password
3. Use the app password in your `.env` file

## Building for Production

```bash
# Build frontend
npm run build

# Start backend in production
cd backend
npm start
```

## Project Structure

```
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── assets/        # Images and static files
│   └── lib/           # Utility functions
├── backend/
│   ├── server.js      # Express server
│   └── package.json   # Backend dependencies
└── public/            # Static assets
```

## API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/health` - Health check

## Deployment

### Frontend
Deploy the built files from `dist/` folder to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3

### Backend
Deploy the backend to:
- Heroku
- Railway
- DigitalOcean
- AWS EC2

## License

This project is private and proprietary to Enrich Employment.

## Support

For technical support, contact the development team.
