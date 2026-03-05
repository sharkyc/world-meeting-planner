# 🌍 World Meeting Time Planner

<div align="center">
  <img src="public/logo.svg" alt="World Meeting Planner Logo" width="200" height="280">
</div>

English | [简体中文](README.md)

> **Live Demo**: [https://sharkyc.github.io/world-meeting-planner/](https://sharkyc.github.io/world-meeting-planner/) 🚀

An elegant cross-timezone meeting planning application that helps global teams easily find the best meeting times and avoid timezone conversion headaches.

**✨ New Feature**: Now supporting bilingual Chinese/English interface! Click the language button in the top-right corner to switch.

## ✨ Features

### Core Features

#### ⏰ Real-Time Timezone Display
- **Large Local Time Display**: Prominently shows current time and timezone at the top
- **Multi-City Time Cards**: Horizontal scroll to view current times of all selected cities
- **UTC Offset**: Automatically calculates and displays time difference for each city relative to your local timezone
- **Real-Time Updates**: All times refresh automatically every second
- **Working Status Indicator**: Green for working hours (9:00-18:00), gray for off-hours

#### 📊 Meeting Time Visualization
- **24-Hour Timeline**: Visually display the 24-hour distribution for each city
- **Color-Coded Time Periods**:
  - 🟢 Green: Working hours (9:00-18:00)
  - 🟣 Purple: Morning (6:00-12:00)
  - 🟠 Orange: Afternoon (12:00-18:00)
  - 🔵 Dark Blue: Night (18:00-6:00)
- **Overlap Indicator**: Black border marks golden hours when all cities are in working hours
- **Best Meeting Time Recommendations**: Automatically calculates and displays optimal meeting times for all cities

#### 🔍 City Search & Management
- **250+ World Cities**: Covering major cities across six continents
  - China: Beijing, Shanghai, Guangzhou, Shenzhen, Chengdu, Hangzhou, Xi'an, Wuhan, etc.
  - Asia: Tokyo, Seoul, Singapore, Bangkok, Kuala Lumpur, Jakarta, Manila, etc.
  - Europe: London, Paris, Berlin, Rome, Madrid, Amsterdam, etc.
  - North America: New York, Los Angeles, Chicago, San Francisco, Toronto, Vancouver, etc.
  - South America: São Paulo, Buenos Aires, Lima, etc.
  - Africa: Cairo, Johannesburg, Lagos, etc.
  - Oceania: Sydney, Melbourne, Auckland, etc.
- **Smart Search**: Search by Chinese name, English name, or country name
- **Real-Time Filtering**: Instant display of matching results as you type
- **Add/Remove Cities**: Flexibly manage your comparison list

#### 🔗 Sharing Features
- **One-Click Share**: Click the share button to automatically copy a link with your current city configuration
- **URL Encoding**: City list is encoded in URL parameters for easy sharing
- **Auto-Restore**: Opening a shared link automatically loads the same city configuration
- **Local Storage**: City list is automatically saved to browser, persists across refreshes

#### 🌐 Internationalization Support
- **Bilingual Interface**: Supports Chinese and English interfaces
- **Auto Detection**: Automatically selects interface language based on browser settings
- **Manual Switch**: Click the language button (🇨🇳/🇺🇸) in the top-right corner to switch anytime
- **Localized Storage**: Language preference saved in browser

#### 📅 Calendar View
- **Date Selector**: Flexibly choose any date to view meeting times
  - Previous/Next day quick navigation
  - Shortcut buttons: Today, Tomorrow, Next Monday
  - Calendar picker: Precisely select any future date
- **Weekly View Recommendations**: One-click view of best meeting times for the entire week
  - 🥇 Gold Recommendation: 4+ hours overlap (Best)
  - 🥈 Silver Recommendation: 2-4 hours overlap (Recommended)
  - 🥉 Bronze Recommendation: 1-2 hours overlap (Acceptable)
- **Smart Markers**:
  - Today highlighted
  - Weekends marked in gray
  - No overlap warning alerts
- **Future Planning**: Easily plan meetings for next week, next month, or beyond

## 🛠️ Tech Stack

### Frontend Framework
- **React 18** - Modern UI framework
- **Vite 7** - Lightning-fast development build tool
- **Zustand** - Lightweight state management
- **i18n** - Custom internationalization solution

### Time Handling
- **Luxon** - Powerful date-time processing library
- **IANA Timezone Database** - Accurate global timezone data

### UI Design
- **Minimalist Design**: Tool-first, high contrast, no decoration
- **Responsive Layout**: Perfect for desktop, tablet, and mobile
- **CSS Custom Properties**: Unified theme variable system

## 🎨 Design Style

### Logo Design Concept

The logo features a four-color gradient ring design, symbolizing collaboration across four major time zones worldwide:

- 🟣 **Purple Gradient** (Morning 6:00-12:00): Represents the start of a new day
- 🟢 **Green Gradient** (Working Hours 9:00-18:00): Symbolizes productive collaboration
- 🟠 **Orange Gradient** (Afternoon 12:00-18:00): Reflects warm afternoon hours
- 🔵 **Blue Gradient** (Night 18:00-6:00): Represents quiet rest time

The minimalist clock grid at the center, combined with the green highlight point at the top, embodies the core functionality of "finding the best meeting time."

### Minimalist Principles
- **Tool First**: Clear functionality, no fancy effects
- **High Contrast**: Distinct black and white, clear and readable
- **No Decoration**: Remove all unnecessary elements

### Color System
```css
/* Basic Colors */
--bg-primary: #ffffff;        /* Primary background */
--bg-secondary: #f7f7f7;      /* Secondary background */
--bg-tertiary: #e5e5e5;       /* Tertiary background */

/* Text Colors */
--text-primary: #000000;      /* Primary text */
--text-secondary: #666666;    /* Secondary text */
--text-tertiary: #999999;     /* Tertiary text */

/* Semantic Colors */
--time-work: #22c55e;         /* Working hours */
--time-morning: #a78bfa;      /* Morning */
--time-afternoon: #f59e0b;    /* Afternoon */
--time-night: #1e3a8a;        /* Night */
```

## 📦 Installation & Running

### Requirements
- Node.js >= 18.x
- npm >= 9.x

### Install Dependencies
```bash
npm install
```

### Development Mode
```bash
npm run dev
```
Application will start at `http://localhost:5173`

### Build Production Version
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📂 Project Structure

```
world-clock-map/
├── src/
│   ├── components/           # React components
│   │   ├── LocalTimeHeader.jsx       # Local time header
│   │   ├── CityCard.jsx              # City time card
│   │   ├── MeetingTimeVisualizer.jsx # Meeting time visualization
│   │   ├── AddCitySection.jsx        # Add city section
│   │   ├── ShareButton.jsx           # Share button
│   │   └── LanguageSwitcher.jsx      # Language switcher
│   ├── store/
│   │   ├── timeStore.js      # Time state management
│   │   └── languageStore.js  # Language state management
│   ├── i18n/
│   │   └── translations.js   # Translation files (Chinese/English)
│   ├── styles/
│   │   └── global.css        # Global styles
│   ├── App.jsx               # Main app component
│   └── main.jsx              # App entry point
├── public/                   # Static assets
├── index.html                # HTML template
├── package.json              # Dependencies config
├── vite.config.js           # Vite config
├── README.md                # Chinese documentation
└── README_EN.md             # English documentation
```

## 🎯 Core Algorithms

### Time Difference Calculation
```javascript
// Calculate time difference between two timezones (in hours)
const calculateTimeDifference = (targetTimezone, localTimezone) => {
  const now = DateTime.local();
  const targetOffset = DateTime.local().setZone(targetTimezone).offset;
  const localOffset = DateTime.local().setZone(localTimezone).offset;
  return (targetOffset - localOffset) / 60;
};
```

### Best Meeting Time Finder
```javascript
// Find time slots when all cities are in working hours
const findBestMeetingSlots = (cities, date) => {
  const slots = [];

  for (let hour = 0; hour < 24; hour++) {
    const localTimeAtHour = date.set({ hour });
    const workingCities = cities.filter(city => {
      const cityTime = localTimeAtHour.setZone(city.timezone);
      return isWorkingHours(cityTime);
    });

    // All cities in working hours
    if (workingCities.length === cities.length) {
      slots.push({ startHour: hour, endHour: hour + 1 });
    }
  }

  return mergeConsecutiveSlots(slots);
};
```

## 🚀 Use Cases

### 1. International Team Meetings
- Team members across US, Europe, and Asia
- Quickly find overlapping hours when everyone is at work
- Avoid scheduling meetings in someone's late night or early morning

### 2. Client Meeting Planning
- Clients in different timezones
- Check their current time in advance
- Choose appropriate meeting time to show professionalism

### 3. Global Live Events
- Plan global live stream times
- Ensure audiences in key markets can watch
- Avoid late night hours in important markets

### 4. Future Meeting Planning
- Use the date selector to plan meetings weeks or months in advance
- Check weekly view to identify the best day for your meeting
- Compare multiple dates to find optimal time slots

### 5. Remote Collaboration
- Daily collaboration for distributed teams
- Know your colleagues' local times
- Choose appropriate times for communication

## 💡 Usage Tips

1. **Add Cities**: Click "Add City" button at the bottom, search and select cities to compare
2. **Remove Cities**: Click the × button in the top-right corner of city cards
3. **View Details**: Hover over the timeline to see specific time period information
4. **Share Configuration**: Click the "Share" button in the top-right, copy the link to team members
5. **Best Times**: Pay attention to the green-bordered time slots at the bottom - these are golden hours suitable for all cities
6. **Plan Future Meetings**:
   - Use the date selector to choose a future date
   - Check the weekly view to find the best meeting day of the week
   - Click "Today", "Tomorrow", or "Next Monday" for quick navigation

## 📱 Responsive Design

- **Desktop** (>1024px): Full functionality, left-right layout
- **Tablet** (768-1024px): Touch-optimized, top-bottom layout
- **Mobile** (<768px): Single column layout, optimized for small screens

## 🌐 Browser Support

- Chrome >= 90
- Firefox >= 88
- Safari >= 14
- Edge >= 90

## 🔒 Privacy & Data

- **Pure Frontend**: All data processed locally, not sent to servers
- **Local Storage**: City list saved in browser localStorage
- **No Tracking**: No analytics or tracking code used

## 🛣️ Roadmap

### v1.1 (Completed ✅)
- [x] Bilingual Chinese/English interface
- [x] Browser language auto-detection
- [x] Language preference local storage

### v1.2 (Completed ✅)
- [x] Date selector (single day/weekly view)
- [x] Weekly view meeting time recommendations
- [x] Smart recommendation tier system (Gold/Silver/Bronze)
- [x] Future date meeting planning

### v1.3 (Planned)
- [ ] Drag and drop to reorder cities
- [ ] Meeting duration settings (30min, 1 hour, 2 hours)
- [ ] Export meeting invitations (.ics files)
- [ ] Dark mode
- [ ] Custom working hours settings
- [ ] Favorite cities feature

### v2.0 (Long-term)
- [ ] More languages (Japanese, Korean, French, etc.)
- [ ] PWA support, offline usage
- [ ] Desktop widgets (Windows/macOS)
- [ ] Browser extension (quickly check times on other websites)
- [ ] API endpoints (for other app integration)

## 🤝 Contributing

Issues and Pull Requests are welcome!

### Development Workflow
1. Fork this repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

### Code Standards
- Use ESLint for code checking
- Follow existing code style
- Add appropriate comments
- Update related documentation

## 📄 License

MIT License - See [LICENSE](LICENSE) file for details

## 👨‍💻 Author

Created with ❤️ by [sharkyc](https://github.com/sharkyc)

## 🌐 Live Demo

**GitHub Pages**: [https://sharkyc.github.io/world-meeting-planner/](https://sharkyc.github.io/world-meeting-planner/)

Experience the convenience of cross-timezone meeting planning now!

## 🙏 Acknowledgments

- [Luxon](https://moment.github.io/luxon/) - Powerful date-time library
- [Zustand](https://github.com/pmndrs/zustand) - Simple state management
- [Vite](https://vitejs.dev/) - Fast build tool
- [React](https://react.dev/) - UI library

---

**Making global collaboration simpler!** 🌍✈️

For questions or suggestions, please submit an [Issue](https://github.com/sharkyc/world-meeting-planner/issues)
