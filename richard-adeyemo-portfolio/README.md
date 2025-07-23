# Digital Portfolio Application

A modern, professional portfolio website built with React, Express.js, and TypeScript. This application showcases skills, projects, and services with a responsive design and interactive features.

## Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Portfolio**: Showcase projects with technology stacks and external links
- **Contact Form**: Fully functional contact form with validation
- **Skills Display**: Animated progress bars showing technical expertise
- **Services Section**: Highlight professional services offered
- **Resume Download**: Integrated resume download functionality

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **shadcn/ui** components
- **Vite** for development and building
- **TanStack Query** for state management
- **React Hook Form** with Zod validation

### Backend
- **Express.js** with TypeScript
- **In-memory storage** with PostgreSQL schema ready
- **RESTful API** design
- **Form validation** with Zod

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Access the application:**
   - Open your browser to `http://localhost:5000`

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom hooks
│   │   └── lib/           # Utilities and configurations
├── server/                # Backend Express application
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   └── storage.ts        # Data storage layer
├── shared/                # Shared types and schemas
└── package.json          # Project dependencies
```

## Customization

### Personal Information
Update the following files to customize with your information:
- `client/src/components/navigation.tsx` - Change name in header
- `client/src/components/hero.tsx` - Update name, title, and description
- `client/src/components/about.tsx` - Personal story and details
- `client/src/components/skills.tsx` - Technical and design skills
- `client/src/components/portfolio.tsx` - Your projects and work
- `client/src/components/services.tsx` - Services you offer
- `client/src/components/contact.tsx` - Contact information
- `client/src/components/footer.tsx` - Footer details

### Styling
- Colors are defined in `client/src/index.css`
- Tailwind configuration in `tailwind.config.ts`
- Component styles use CSS variables for easy theming

### Adding New Sections
1. Create component in `client/src/components/`
2. Add to `client/src/pages/home.tsx`
3. Update navigation in `client/src/components/navigation.tsx`

## API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/contacts` - Get all contacts (admin)
- `GET /api/resume` - Download resume

## Production Deployment

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Start production server:**
   ```bash
   npm start
   ```

## Database Setup (Optional)

The application uses in-memory storage by default. To use PostgreSQL:

1. Set up a PostgreSQL database
2. Add `DATABASE_URL` environment variable
3. Run database migrations with Drizzle
4. Update storage configuration in `server/storage.ts`

## Environment Variables

Create a `.env` file for production:
```
NODE_ENV=production
DATABASE_URL=postgresql://username:password@localhost:5432/portfolio
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For questions or support, please contact through the contact form on the website or create an issue in the repository.