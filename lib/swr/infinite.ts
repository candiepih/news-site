import { getPathFromApiUrl } from "../helpers/format";
import { Article } from "../types/article";
import { QueryApiResponse } from "../types/query-api-response";

export const getKey = (path: string) => {
  return (
    _pageIndex: number,
    previousPageData: QueryApiResponse<Article>
  ) => {
    if (!previousPageData) return path;
    return getPathFromApiUrl(previousPageData.next) ?? null;
  };
};
