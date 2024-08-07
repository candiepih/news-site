// export const CACHE_EXPIRES_IN = 3600 * 24; // 24 hours
export const CACHE_EXPIRES_IN = 10; // 10 seconds

export const fetcher = (url: string) =>
  fetch(url).then(async (res) => {
    const data = await res.json();
    return data.results;
  });
