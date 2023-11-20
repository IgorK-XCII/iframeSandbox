import { useQueryParams } from "./useQueryParams";

type Form = {
  url: string;
  height: string;
  width: string;
  background: string;
  padding: string;
};

const observParams: (keyof Form)[] = [
  "background",
  "height",
  "url",
  "width",
  "padding",
];

export const useForm = () => {
  const { params, setParam } = useQueryParams<Form>(observParams);

  const handleSetUrl = (url: string) => setParam({ url });
  const handleSetHeight = (height: string) => setParam({ height });
  const handleSetWidth = (width: string) => setParam({ width });
  const handleSetBackground = (background: string) => setParam({ background });
  const handleSetPadding = (padding: string) => setParam({ padding });

  return {
    value: params,
    handleSetUrl,
    handleSetHeight,
    handleSetWidth,
    handleSetBackground,
    handleSetPadding,
  };
};
