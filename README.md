# Siddhesh Padwal - Portfolio Website

A modern, responsive portfolio website showcasing my journey as a full-stack developer specializing in AI-powered applications and web technologies.

## 🚀 Live Demo

[View Live Portfolio](https://protfolio-psi-azure.vercel.app/#projects) 

## 📋 Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Dark/Light Theme**: Automatic theme switching with user preference detection
- **Interactive Animations**: Smooth scroll animations powered by GSAP
- **Typing Effect**: Dynamic text animation in the hero section
- **Mobile Navigation**: Collapsible mobile menu with smooth transitions
- **Command Palette**: Keyboard shortcut (Ctrl+K) for quick navigation
- **Project Showcase**: Featured projects with technology tags and links
- **Contact Integration**: Direct links to email, LinkedIn, and GitHub
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **Performance Optimized**: Preloaded critical resources and optimized assets

## 🛠️ Technologies Used

### Frontend

- **HTML5**: Semantic markup and structure
- **CSS3**: Custom styling with CSS Grid and Flexbox
- **Tailwind CSS**: Utility-first CSS framework
- **JavaScript (ES6+)**: Interactive functionality and DOM manipulation

### Libraries & Frameworks

- **GSAP**: High-performance animations and scroll triggers
- **Tailwind CSS**: Responsive design utilities

### Development Tools

- **VS Code**: Primary development environment
- **Git**: Version control
- **GitHub**: Repository hosting and deployment

## 📁 Project Structure

```
protfolio/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles and responsive design
├── scripts.js          # JavaScript functionality
└── README.md          # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for external CDN resources

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio/protfolio
   ```

2. **Open in browser**

   - Simply open `index.html` in your web browser
   - Or use a local server for better development experience:

     ```bash
     # Using Python (if installed)
     python -m http.server 8000

     # Using Node.js (if installed)
     npx serve .

     # Then visit http://localhost:8000
     ```

## 🎯 Usage

### Navigation

- **Desktop**: Use the navigation bar at the top
- **Mobile**: Tap the hamburger menu icon
- **Keyboard**: Press `Ctrl+K` (or `Cmd+K` on Mac) to open the command palette

### Theme Switching

- The site automatically detects your system's theme preference
- Theme preference is saved in localStorage

### Interactive Elements

- **Scroll Animations**: Sections animate in as you scroll
- **Typing Effect**: Hero text cycles through different messages
- **Project Cards**: Hover effects and smooth transitions
- **Contact Links**: Direct links to external profiles

## 📱 Responsive Breakpoints

- **Mobile**: Up to 640px
- **Tablet**: 641px to 1024px
- **Desktop**: 1025px to 1439px
- **Large Desktop**: 1440px and above

## 🎨 Customization

### Colors

The color scheme uses CSS custom properties (variables) defined in `:root`:

- Primary: `#0066ff`
- Secondary: `#00d4ff`
- Accent: `#ff6b35`
- Background colors for dark/light themes

### Content

To update content:

1. **Personal Info**: Edit the HTML in `index.html`
2. **Projects**: Add new project cards in the projects section
3. **Skills**: Update the skills grid in the skills section
4. **Contact**: Modify contact information and links

### Styling

- **Global Styles**: Modify `styles.css`
- **Component Styles**: Use Tailwind classes or add custom CSS
- **Animations**: Adjust GSAP animations in `scripts.js`

## 🔧 Development

### Adding New Features

1. **HTML Structure**: Add new sections in `index.html`
2. **Styling**: Use Tailwind classes or custom CSS in `styles.css`
3. **Functionality**: Add JavaScript functions in `scripts.js`
4. **Initialization**: Call new functions in the DOMContentLoaded event listener

### Performance Tips

- Minimize external dependencies
- Optimize images and assets
- Use CSS transforms for animations instead of layout properties
- Implement lazy loading for heavy content

## 📈 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Siddhesh Padwal**

- Email: siddheshpadwal016@gmail.com
- LinkedIn: [linkedin.com/in/siddhesh-padwal](https://www.linkedin.com/in/siddhesh-padwal-768b20373)
- GitHub: [github.com/siddhesh-padwal](https://github.com/siddhesh-padwal)
- Location: Mumbai, India

---

_Built with ❤️ using modern web technologies_

