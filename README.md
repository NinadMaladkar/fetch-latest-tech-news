# Latest Tech News

A React application that fetches and displays the latest technology news from TechCrunch using the NewsAPI.

## Features

- Fetch latest tech news with a single click
- Display news articles in a responsive grid layout
- Show article title, description, published date, and content
- Direct links to full articles
- Clean and modern UI design

## Technologies Used

- React 19
- Vite
- NewsAPI
- CSS Grid for responsive layout

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd fetch-latest-tech-news
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

1. Click the "Fetch Latest TechCrunch News" button
2. Wait for the news articles to load
3. Browse through the news tiles
4. Click on article links to read the full content

## API Configuration

This application uses the NewsAPI to fetch tech news. The API key is currently embedded in the frontend for demonstration purposes.

**Note:** For production use, you should:

- Move the API key to environment variables
- Implement a backend proxy to keep the API key secure
- Use proper CORS configuration

## Project Structure

```
fetch-latest-tech-news/
├── src/
│   ├── App.jsx          # Main React component
│   ├── App.css          # Styles for the application
│   └── main.jsx         # React entry point
├── package.json
├── vite.config.js
├── dist/                # Production build output
└── README.md
```

## Deployment

This project can be deployed to various platforms:

### GitHub Pages

1. Build the project: `npm run build`
2. Deploy using GitHub Actions or manual upload

### Vercel

1. Connect your GitHub repository to Vercel
2. Deploy automatically on push

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the ISC License.

## Acknowledgments

- [NewsAPI](https://newsapi.org/) for providing the news data
- [TechCrunch](https://techcrunch.com/) for the news content
- [React](https://reactjs.org/) for the frontend framework
- [Vite](https://vitejs.dev/) for the build tool
