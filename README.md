# 🌟 Tab Manager - Beautiful New Tab Extension

Transform your boring new tab into a personalized, productive workspace with stunning visuals and essential tools.

![Tab Manager Main Interface](https://github.com/bishnoimukesh/Tab-manager/raw/main/screenshots/main-interface.png)

## 🚀 Features

### 📅 **Smart Time & Greetings**
- Dynamic time display with personalized greetings
- "Good Morning", "Good Afternoon", "Good Evening" based on current time
- Personalized welcome message with your name

### 🌤️ **Real-time Weather Information**
- Auto-detects your location for accurate weather data
- Current temperature and wind speed display
- Detailed weather modal with:
  - Feels like temperature
  - Humidity percentage
  - Atmospheric pressure
  - Sunrise and sunset times
  - 7-day weather forecast

![Weather Details Modal](https://github.com/bishnoimukesh/Tab-manager/raw/main/screenshots/weather-modal.png)

### ✅ **Smart Todo Management**
- Clean, intuitive todo interface
- Add, complete, and delete tasks
- Persistent storage across browser sessions
- Perfectly centered modal for distraction-free task management

![Todo List Interface](https://github.com/bishnoimukesh/Tab-manager/raw/main/screenshots/todo-modal.png)

### 🔍 **Integrated Google Search**
- Modern glassmorphism search interface
- Instant redirection to Google search results
- Debounced input for smooth performance
- Beautiful gradient design with hover effects

### 🖼️ **Stunning Visual Experience**
- High-quality background images from Unsplash
- Optimized image loading with gradient fallbacks
- Consistent visual theme across all components
- Glassmorphism design elements

### 💡 **Daily Inspiration**
- Motivational quotes that change daily
- Thoughtfully curated content for productivity

## 📱 Screenshots

### Main Interface
The clean, modern interface showing time, weather, and search functionality.

### Weather Details
Comprehensive weather information including 7-day forecast with beautiful icons and descriptions.

### Todo Management
Intuitive todo list with completion tracking and clean design.

## 🛠️ Built With

- **React 18** - Modern React with functional components and hooks
- **CSS3** - Advanced styling with glassmorphism effects
- **Open-Meteo API** - Reliable weather data
- **Browser APIs** - Geolocation and local storage
- **Chrome Extension API** - Manifest V3 compliance

## ⚡ Technical Features

- **Portal-based Modals** - Clean separation from DOM hierarchy
- **Responsive Design** - Works on all screen sizes
- **Performance Optimized** - Fast loading with image preloading
- **Error Handling** - Graceful fallbacks for all features
- **Local Storage** - Persistent data without external dependencies
- **Modern CSS** - Glassmorphism, gradients, and smooth animations

## 🔧 Installation & Development

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Setup
```bash
# Clone the repository
git clone https://github.com/bishnoimukesh/Tab-manager.git

# Navigate to project directory
cd Tab-manager

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

### Chrome Extension Installation
1. Run `npm run build` to create the build folder
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode"
4. Click "Load unpacked" and select the `build` folder
5. Your extension is now installed!

## 📦 Project Structure

```
Tab-manager/
├── public/
│   ├── manifest.json          # Chrome extension manifest
│   ├── privacy-policy.txt     # Privacy policy for store listing
│   └── index.html
├── src/
│   ├── components/
│   │   ├── clock/             # Time display component
│   │   ├── search/            # Google search integration
│   │   ├── todo/              # Todo list management
│   │   ├── weather/           # Weather information
│   │   └── quote/             # Daily quotes
│   ├── pages/
│   │   ├── OnBoarding.jsx     # First-time user setup
│   │   └── AfterOnBoarding.jsx # Main application
│   ├── context/
│   │   └── todo-context.jsx   # Todo state management
│   └── reducer/
│       └── TodoReducer.jsx    # Todo actions
```

## 🌟 Key Accomplishments

- **Modern UX/UI Design** - Glassmorphism effects and smooth animations
- **Performance Optimization** - Fast loading with efficient image handling
- **Chrome Web Store Ready** - Complete with privacy policy and proper permissions
- **Responsive Design** - Perfect display on all screen sizes
- **Error Resilience** - Graceful handling of location denial and API failures

## 📚 Learning Outcomes

- **React Ecosystem** - Advanced hooks, context API, and component architecture
- **Browser APIs** - Geolocation, local storage, and Chrome extension APIs
- **Modern CSS** - Glassmorphism, CSS Grid/Flexbox, and responsive design
- **API Integration** - Weather APIs and error handling
- **Performance** - Image optimization and loading strategies
- **Publishing** - Chrome Web Store submission process

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [Chrome Web Store](https://chrome.google.com/webstore/detail/my-manager/ggekoaaejeocdcbfpchhbaimmmnlnjih/related?hl=en&authuser=0)
- [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/my-manager/)
- [Live Demo](https://your-demo-link.com)

## 📞 Contact

- **GitHub**: [@bishnoimukesh](https://github.com/bishnoimukesh)
- **Email**: [mukeshbishnoi@example.com]

---

⭐ **Star this repository if you found it helpful!**
