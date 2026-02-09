# Profile Viewer Application

A single-page React application for viewing profile information with tabbed navigation for Training, Assessment, and Renewal records.

## Quick Start

### Install Dependencies
```bash
yarn install
```

### Development
```bash
yarn start
```
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### Production Build
```bash
yarn build
```
Creates an optimized production build in `frontend/build/`

### Optimized Production Build
```bash
yarn build:prod
```
Cleans cache and creates a fresh optimized build

### Preview Production Build
```bash
yarn serve
```
Serves the production build at [http://localhost:5000](http://localhost:5000)

### Clean Build Artifacts
```bash
yarn clean
```
Removes build folder and webpack cache

## Data Management

All profile and records data is stored in `/app/data.json`

To modify data:
1. Edit `/app/data.json` directly
2. Refresh the browser to see changes (dev mode)
3. Rebuild for production deployment (`yarn build`)

### Data Structure
```json
{
  "profile": {
    "name": "string",
    "dateOfBirth": "string",
    "sex": "string",
    "nationality": "string",
    "birthplace": "string"
  },
  "training": [...],
  "assessment": [...],
  "renewal": [...]
}
```

## Build Optimizations

The production build includes:
- No source maps (smaller bundle size)
- Code splitting (vendors chunk, common chunk)
- Runtime chunk separation
- Tree shaking for unused code
- Minification and compression

## Project Structure

```
/app/
├── data.json                 # Profile and records data (symlink)
├── package.json             # Root package.json for build commands
├── frontend/
│   ├── public/
│   │   └── data.json        # Actual data file location
│   ├── src/
│   │   ├── App.js           # Main application component
│   │   ├── App.css          # Component styles
│   │   └── index.css        # Global styles with Tailwind
│   └── package.json         # Frontend dependencies
└── README.md
```

## Technologies

- **React 19** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Craco** - Build configuration

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Build Output

Production build typically generates:
- `vendors.js` (~61 KB gzipped) - Third-party libraries
- `main.js` (~1.3 KB gzipped) - Application code
- `main.css` (~9 KB gzipped) - Styles
- `runtime.js` (~600 B gzipped) - Webpack runtime

Total bundle size: ~72 KB gzipped
