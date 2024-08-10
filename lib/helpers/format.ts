import { PROXY_PATH } from "../urls";

export const formatTitle = (title: string): string => {
  // remove underscores and replace with space
  const t = title.replace(/_/g, " ");
  // capitalize first letter of each word
  return t.replace(/\b\w/g, (l) => l.toUpperCase());
};

export const formatImageUrl = (url: string, alternative?: string): string => {
  const defaultImagePath = alternative || "/no-image-3.webp";

  if (!url) {
    return defaultImagePath;
  }

  // ends with .gif or contains image/gif, return fallback path /news-paper.webp
  if (url.endsWith(".gif") || url.includes("image/gif")) {
    return defaultImagePath;
  }

  return url;
};

export const getPathFromApiUrl = (url: string | null | undefined): string | null => {
  if (!url) {
    return null;
  }

  //  remove http://news-api.alexnjagi.com/
  const path = url.replace("http://news-api.alexnjagi.com", "");
  return `${PROXY_PATH}/${path}`;
};
