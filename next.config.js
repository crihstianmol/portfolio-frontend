module.exports = {
    reactStrictMode: true,
    env: {
      REACT_APP_SPOTIFY_CLIENT_ID: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
      REACT_APP_SPOTIFY_CLIENT_SECRET: process.env.REACT_APP_SPOTIFY_CLIENT_SECRET,
      REACT_APP_SPOTIFY_REFRESH_TOKEN: process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN,
      REACT_APP_NOTION_BLOG_PAGE: process.env.REACT_APP_NOTION_BLOG_PAGE,
      REACT_APP_GRAPH_URL: process.env.REACT_APP_GRAPH_URL,
    }
  }