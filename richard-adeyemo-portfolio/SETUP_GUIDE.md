# Digital Portfolio Setup Guide

## Quick Setup on Any Platform

### 1. Create New Project
```bash
mkdir my-portfolio
cd my-portfolio
npm init -y
```

### 2. Install Dependencies
```bash
npm install react react-dom @types/react @types/react-dom
npm install express @types/express
npm install typescript tsx vite @vitejs/plugin-react
npm install tailwindcss postcss autoprefixer
npm install @tanstack/react-query
npm install react-hook-form @hookform/resolvers zod
npm install lucide-react
npm install wouter
npm install drizzle-orm drizzle-zod
npm install class-variance-authority clsx tailwind-merge
npm install @radix-ui/react-slot @radix-ui/react-label
npm install @radix-ui/react-toast
```

### 3. Key Configuration Files Needed

**package.json scripts:**
```json
{
  "scripts": {
    "dev": "NODE_ENV=development tsx server/index.ts",
    "build": "vite build",
    "start": "NODE_ENV=production node dist/index.js"
  }
}
```

**vite.config.ts:**
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src'),
      '@shared': path.resolve(__dirname, './shared')
    }
  },
  build: {
    outDir: 'dist/public'
  }
})
```

**tailwind.config.ts:**
```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './client/src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config
```

### 4. Folder Structure
```
my-portfolio/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── lib/
│   │   ├── hooks/
│   │   └── index.css
├── server/
│   ├── index.ts
│   ├── routes.ts
│   └── storage.ts
└── shared/
    └── schema.ts
```

### 5. Alternative: Use This Replit

**Easiest Option:**
1. Fork this Replit project
2. Customize the content in the component files
3. Deploy directly from Replit

**Your portfolio is fully functional right now!**
- Visit the preview URL to see it live
- Edit the component files to customize
- Use Replit's deploy feature to publish

## Customization Checklist

- [ ] Update name in `client/src/components/navigation.tsx`
- [ ] Update hero section in `client/src/components/hero.tsx`
- [ ] Replace projects in `client/src/components/portfolio.tsx`
- [ ] Update skills in `client/src/components/skills.tsx`
- [ ] Customize about section in `client/src/components/about.tsx`
- [ ] Update contact info in `client/src/components/contact.tsx`
- [ ] Replace social links in `client/src/components/footer.tsx`
- [ ] Add your resume file for download