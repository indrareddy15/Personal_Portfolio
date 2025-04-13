# Personal Portfolio

This is a personal portfolio application showcasing the skills, projects, work experience, and contact information of Ganta Indra Reddy. The application is built using modern web technologies and provides an interactive and visually appealing user experience.

## Tech Stack

- **Frontend Framework**: React with TypeScript
- **3D Graphics**: Three.js (via `@react-three/fiber` and `@react-three/drei`)
- **Styling**: Tailwind CSS and SCSS
- **Animations**: Framer Motion
- **Email Integration**: EmailJS for contact form functionality

## Features

### 1. Navigation

- **File**: [Navigation.tsx](#file:Navigation.tsx-context)
- A responsive navigation bar with links to different sections of the portfolio.
- Includes a mobile-friendly menu toggle with smooth animations.

### 2. Hero Section

- **File**: [Hero.tsx](#file:Hero.tsx-context)
- A visually engaging introduction section with a 3D animated laptop model created using Three.js.
- Includes call-to-action buttons for viewing projects and contacting the user.

### 3. Skills Section

- **File**: [Skills.tsx](#file:Skills.tsx-context)
- Displays categorized skills with icons and hover effects.
- Uses Framer Motion for smooth animations when the section comes into view.

### 4. Projects Section

- **File**: [Projects.tsx](#file:Projects.tsx-context)
- Showcases featured projects with descriptions, tech stacks, and durations.
- Includes hover effects and animations for an interactive experience.

### 5. Contact Section

- **File**: [Contact.tsx](#file:Contact.tsx-context)
- Provides contact information (email, phone, LinkedIn, GitHub) with icons.
- Includes a functional contact form powered by EmailJS for sending messages directly.

### 6. 3D Laptop Model

- **File**: [Laptop.tsx](#file:Laptop.tsx-context)
- A 3D laptop model rendered using Three.js.
- Includes subtle animations for rotation, adding a dynamic touch to the Hero section.

### 7. Application Structure

- **File**: [App.tsx](#file:App.tsx-context)
- Combines all the components into a cohesive single-page application.
- Uses React's `Suspense` for lazy loading and fallback handling.

## Styling and Animations

- **Tailwind CSS**: Used for utility-first styling, ensuring a responsive and modern design.
- **SCSS**: Custom global styles and variables for consistent theming.
- **Framer Motion**: Smooth animations for transitions, hover effects, and section reveals.
- **Three.js**: Interactive 3D graphics for the Hero section.

## How to Run

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the development server with `npm run dev`.
4. Open the application in your browser at `http://localhost:3000`.

## License

This project is open-source and available under the MIT License.
