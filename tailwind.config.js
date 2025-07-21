/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        mono: ['monospace'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        card: 'var(--card)',
        'card-foreground': 'var(--card-foreground)',
        html: '#E34F26',
        css: '#1572B6',
        javascript: '#F7DF1E',
        nextjs: '#000000',
        tailwindcss: '#06B6D4',
        git: '#F05032',
        java: '#007396',
        python: '#3776AB',
        springboot: '#6DB33F',
        django: '#092E20',
        bootstrap: '#7952B3',
        mysql: '#4479A1',
        postgresql: '#336791',
        figma: '#F24E1E',
        visualstudio: '#5C2D91',
        linux: '#FCC624',
      },
    },
  },
  plugins: [],
}; 