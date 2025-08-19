# Weather Dashboard

React + Vite + Tailwind starter for a Weather Dashboard that uses OpenWeatherMap.

## Features
- Search a city and show current weather (temperature, humidity, wind speed, icon)
- Responsive UI with Tailwind CSS
- Ready for deployment on Vercel/Netlify

## Quickstart

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file (or set environment variable) based on `.env.example`:
   ```
   VITE_API_KEY=your_openweathermap_api_key_here
   ```

3. Run dev server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Deploy
- Push this repo to GitHub and connect to Vercel or Netlify.
- Add `VITE_API_KEY` as a project environment variable on the hosting platform.

## Commit Message Template (recommended)
Use:
```
<type>(<scope>): <short summary>

[optional longer description]
```

Types: feat, fix, style, refactor, docs, chore

## Branching plan (recommended)
- main (production)
- feature/project-setup
- feature/search-bar
- feature/weather-api
- feature/weather-display
- feature/responsive-ui
- feature/deployment

