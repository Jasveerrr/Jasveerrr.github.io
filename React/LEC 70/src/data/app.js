import spotifyImg from "../assets/spotify-web.webp";
import tinyPngImg from "../assets/tiny-png-web.webp";
import googleSearchImg from "../assets/google-search-web.webp";
import googleTranslateImg from "../assets/google-translate-web.webp";
import linearImg from "../assets/linear-web.webp";
import notionImg from "../assets/notion-web.webp";
import zoomImg from "../assets/zoom-web.webp";
import moreExtensionsImg from "../assets/more-extensions.webp";

const apps = [
  {
    id: 1,
    name: "Spotify",
    description:
      "Search for music and podcasts, browse your library, and control playback.",
    image: spotifyImg,
    bgColor: "#1C5F39",
  },

  {
    id: 2,
    name: "TinyPNG",
    description: "Compress the selected images in Finder with TinyPNG.",
    image: tinyPngImg,
    bgColor: "#123B3D",
  },

  {
    id: 3,
    name: "Google Search",
    description:
      "Need to know something fast? Google it straight from Raycast.",
    image: googleSearchImg,
    bgColor: "#17396F",
  },

  {
    id: 4,
    name: "Google Translate",
    description: "Translate text instantly into dozens of languages.",
    image: googleTranslateImg,
    bgColor: "#23486C",
  },

  {
    id: 5,
    name: "Linear",
    description:
      "Create, assign and manage issues without leaving your keyboard.",
    image: linearImg,
    bgColor: "#22252C",
  },

  {
    id: 6,
    name: "Notion",
    description: "Capture notes, manage docs and organize your workspace.",
    image: notionImg,
    bgColor: "#2E2358",
  },

  {
    id: 7,
    name: "Zoom",
    description: "Start or join meetings instantly with keyboard shortcuts.",
    image: zoomImg,
    bgColor: "#174A86",
  },

  {
    id: 8,
    name: "More Extensions",
    description: "Browse thousands more community-built extensions.",
    image: moreExtensionsImg,
    bgColor: "#1B1B1B",
  },
];

export default apps;
