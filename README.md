# Portfolio

This is a personal portfolio website built with Next.js, Tailwind CSS, and TypeScript. It showcases my projects, skills, and provides a way to contact me.

## Features

- **Responsive Design**: The website is fully responsive and works on all devices.
- **Dark Mode**: Switch between light and dark themes.
- **Component-Based**: Built with reusable React components.

## Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Next-Themes](https://github.com/pacocoursey/next-themes) for theme management
- [React Icons](https://react-icons.github.io/react-icons/) for icons

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v20 or later)
- npm

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username/your_repository.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the development server
   ```sh
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The project has the following structure:

- `src/app/`: Contains the main pages of the application.
  - `layout.tsx`: The main layout of the application.
  - `page.tsx`: The main page of the application.
  - `resume/page.tsx`: The page for the resume.
- `src/components/`: Contains the reusable React components.
  - `About.tsx`: The about section.
  - `Contact.tsx`: The contact section.
  - `Footer.tsx`: The footer of the application.
  - `Hero.tsx`: The hero section.
  - `Navbar.tsx`: The navigation bar.
  - `Projects.tsx`: The projects section.
  - `Skills.tsx`: The skills section.
  - `ThemeProvider.tsx`: The theme provider for dark/light mode.
  - `ThemeSwitcher.tsx`: The component to switch the theme.
- `src/styles/`: Contains the global styles.
- `public/`: Contains the static assets.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).
