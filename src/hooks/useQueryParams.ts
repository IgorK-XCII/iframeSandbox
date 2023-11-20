import { URLSearchParams } from "url";
import { addQueryParamsToUrl } from "../utils/addQueryParamsToUrl";
import { useCallback, useMemo, useState } from "react";
import { getQueryParams } from "../utils/getQueryParams";

export const useQueryParams = <P extends Record<string, any>>(
  observParams: (keyof P)[]
) => {
  const [queryParams, setQueryParams] = useState<URLSearchParams>(
    getQueryParams()
  );

  const setParam = useCallback((param: Partial<P>) => {
    addQueryParamsToUrl(param);
    setQueryParams(getQueryParams());
  }, []);

  const params = useMemo(
    () =>
      observParams.reduce((acc, key) => {
        return {
          ...acc,
          [key]: queryParams.get(key as string) || "",
        };
      }, {} as P),
    [observParams, queryParams]
  );

  return { setParam, params };
};
