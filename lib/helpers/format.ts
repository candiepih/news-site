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
