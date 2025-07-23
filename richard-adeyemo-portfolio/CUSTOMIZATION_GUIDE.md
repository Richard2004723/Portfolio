# Portfolio Customization Guide for Richard

## How to Change Images

### 1. Hero Section Profile Picture
**File:** `client/src/components/hero.tsx`
**Line:** Around line 31

```jsx
<img 
  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400" 
  alt="Richard Adeyemo - Professional headshot" 
  className="w-full h-full object-cover"
/>
```
**To change:** Replace the `src` URL with your professional headshot image URL.

### 2. About Section Workspace Image
**File:** `client/src/components/about.tsx`
**Line:** Around line 13

```jsx
<img 
  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
  alt="Modern workspace with laptop and design materials" 
  className="rounded-xl shadow-lg w-full h-auto"
/>
```

### 3. Project Images
**File:** `client/src/components/portfolio.tsx`
**Lines:** Around lines 18, 26, 34

Each project has an image property you can update:
```jsx
image: "YOUR_PROJECT_IMAGE_URL_HERE"
```

## How to Add/Edit Content

### Adding New Projects
**File:** `client/src/components/portfolio.tsx`

Add a new project to the projects array:
```jsx
{
  title: "Your New Project",
  description: "Detailed description of your project and what you accomplished.",
  image: "https://your-image-url.com",
  technologies: ["Technology1", "Technology2", "Technology3"],
  projectUrl: "https://your-live-project.com",
  githubUrl: "https://github.com/your-username/project"
}
```

### Adding New Skills
**File:** `client/src/components/skills.tsx`

Add to any skills array:
```jsx
{ name: "New Skill Name", percentage: 85, color: "hsl(221, 83%, 53%)" }
```

### Adding New Certificates
**File:** `client/src/components/about.tsx`

Add to the certifications section (around line 87):
```jsx
<div className="flex items-center">
  <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{ 
    backgroundColor: "hsl(221, 83%, 53%, 0.1)" 
  }}>
    <svg className="w-6 h-6" style={{ color: "hsl(221, 83%, 53%)" }} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  </div>
  <div>
    <p className="font-medium text-slate-800">Your Certificate Name</p>
    <p className="text-sm text-slate-600">Description of what you learned</p>
  </div>
</div>
```

### Updating Contact Information
**File:** `client/src/components/contact.tsx`

Update email, phone, and location (around line 80):
```jsx
<div className="flex items-center">
  <Mail size={20} className="text-blue-600 mr-4" />
  <span>your-email@example.com</span>
</div>
```

### Adding Social Media Links
**File:** `client/src/components/contact.tsx` and `client/src/components/footer.tsx`

Update the href attributes in social media links:
```jsx
<a href="https://linkedin.com/in/your-profile" ...>
<a href="https://github.com/your-username" ...>
<a href="https://twitter.com/your-handle" ...>
```

## How to Change Colors

### Main Color Scheme
**File:** `client/src/index.css`

Update CSS variables (lines 28-37):
```css
--portfolio-primary: hsl(221, 83%, 53%);    /* Blue */
--portfolio-secondary: hsl(215, 28%, 17%);  /* Dark Blue */
--portfolio-accent: hsl(43, 96%, 56%);      /* Yellow */
```

### Individual Component Colors
Search for `style={{ backgroundColor: "hsl(...)", color: "hsl(...)" }}` in any component file to change specific colors.

## How to Add New Sections

### 1. Create New Component
Create a new file: `client/src/components/your-section.tsx`

```jsx
export default function YourSection() {
  return (
    <section id="your-section" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">
          Your Section Title
        </h2>
        {/* Your content here */}
      </div>
    </section>
  );
}
```

### 2. Add to Home Page
**File:** `client/src/pages/home.tsx`

Import and add your component:
```jsx
import YourSection from "@/components/your-section";

// Then add <YourSection /> in the JSX
```

### 3. Add to Navigation
**File:** `client/src/components/navigation.tsx`

Add to navItems array (around line 19):
```jsx
{ href: "#your-section", label: "Your Section" }
```

## How to Add Your Own Images

### Option 1: Use Image URLs
Upload your images to:
- Google Drive (make public and get direct link)
- Imgur
- Your own website
- GitHub repository

### Option 2: Local Images
1. Create folder: `client/public/images/`
2. Add your images to this folder
3. Reference them: `src="/images/your-image.jpg"`

## Testing Your Changes

1. **Start development server:**
   ```bash
   npm run dev
   ```

2. **Open browser:** http://localhost:5000

3. **Make changes and see them update live**

## Common Customizations

### Change the Name Everywhere
Search for "Richard Adeyemo" in these files:
- `client/src/components/navigation.tsx`
- `client/src/components/hero.tsx`
- `client/src/components/footer.tsx`

### Update Professional Title
Search for "UI/UX Designer & Web Developer" in:
- `client/src/components/hero.tsx`
- `client/src/components/footer.tsx`

### Add More Experience
Edit the about section description in:
- `client/src/components/about.tsx`

## File Structure Reference
```
client/src/components/
├── navigation.tsx    # Top navigation bar
├── hero.tsx         # First section with name and title
├── about.tsx        # About section with story and certificates
├── skills.tsx       # Skills with progress bars
├── portfolio.tsx    # Projects showcase
├── services.tsx     # Services offered
├── contact.tsx      # Contact form and info
└── footer.tsx       # Bottom footer with links
```

## Need Help?
- Check the browser console for errors (F12 → Console)
- Make sure file paths are correct
- Verify image URLs work by opening them in a browser
- Run `npm run dev` to see changes locally