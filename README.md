# My Portfolio Website

A professional and responsive portfolio website built with React and Tailwind CSS.

## Features

- ✅ Fully responsive navigation bar
- ✅ Professional designation and introduction with photo
- ✅ Resume download button
- ✅ Social media links (GitHub, LinkedIn, Twitter, Facebook)
- ✅ Detailed About Me section with journey, work preferences, and hobbies
- ✅ Skills section with categorized skills and progress bars
- ✅ Educational qualification section
- ✅ Experience section (if applicable)
- ✅ Projects section with at least 3 projects
- ✅ Detailed project pages with technology stack, links, challenges, and improvements
- ✅ Contact section with email, phone, and WhatsApp
- ✅ Elegant footer
- ✅ Fully responsive design for all devices

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

### Personal Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Update your name, designation, and description
   - Replace `/profile-photo.jpg` in the `public` folder with your professional photo
   - Update social media links

2. **About Section** (`src/components/About.jsx`):
   - Customize your programming journey, work preferences, and hobbies

3. **Skills Section** (`src/components/Skills.jsx`):
   - Update skills and proficiency levels

4. **Education Section** (`src/components/Education.jsx`):
   - Add your educational background

5. **Experience Section** (`src/components/Experience.jsx`):
   - Add your professional experience (or leave empty if not applicable)

6. **Projects Section** (`src/components/Projects.jsx`):
   - Update project details, images, and links
   - Add more projects as needed

7. **Contact Section** (`src/components/Contact.jsx`):
   - Update email, phone, and WhatsApp number

8. **Resume**:
   - Replace `public/resume.pdf` with your actual resume PDF

## Project Structure

```
my-portfolio/
├── public/
│   ├── resume.pdf          # Your resume file
│   └── profile-photo.jpg   # Your profile photo
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectDetail.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Technologies Used

- React 18
- Vite
- Tailwind CSS
- HTML5
- CSS3

## License

This project is open source and available for personal use.
"# Portfolio.me" 
