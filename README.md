# Ecoverse.info - Climate Tech Landing Page

A modern, responsive landing page for Ecoverse.info, built with Next.js and Tailwind CSS.

## 🚀 Features

- 🎨 Modern, clean design with custom color scheme
- 📱 Fully responsive layout
- ⚡ Optimized performance
- 🎭 Smooth animations with Framer Motion
- 🔍 SEO optimized
- ♿ Accessibility focused
- 🌐 Mobile-first approach

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Google Fonts](https://fonts.google.com/) - Typography

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/ecoverse.git
   cd ecoverse
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
ecoverse/
├── src/
│   ├── app/
│   │   ├── layout.js
│   │   ├── page.js
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.js
│   │   │   ├── Footer.js
│   │   │   └── Container.js
│   │   ├── sections/
│   │   │   ├── Hero.js
│   │   │   ├── About.js
│   │   │   ├── Products.js
│   │   │   ├── WhyEcoverse.js
│   │   │   ├── Newsletter.js
│   │   │   └── Contact.js
│   │   └── ui/
│   │       └── Button.js
│   └── styles/
├── public/
│   └── images/
├── tailwind.config.js
└── package.json
```

## 🎨 Customization

### Colors, Typography, and Spacing

All theme customization (colors, fonts, spacing, etc.) is managed in `tailwind.config.js`:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#07BC0C",
        accent: "#A8E6A1",
        background: "#FFFFFF",
        textDark: "#1F1F1F",
        textLight: "#6B7280",
        cta: "#2563EB",
        footerBg: "#064E3B",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      fontSize: {
        h1: "3rem",
        h2: "2rem",
        body: "1rem",
      },
      spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "3rem",
      },
      transitionDuration: {
        DEFAULT: "300ms",
        fast: "150ms",
        slow: "500ms",
      },
    },
  },
  // ...
};
```

## 🚀 Deployment

The site can be easily deployed to Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy!

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For any questions or concerns, please reach out to hello@ecoverse.tech
