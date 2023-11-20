import { Input } from "../components/Input";
import cls from "./MainPage.module.css";
import { useForm } from "../hooks/useForm";

export const MainPage = () => {
  const {
    value,
    handleSetBackground,
    handleSetHeight,
    handleSetUrl,
    handleSetWidth,
    handleSetPadding,
  } = useForm();

  const { url, height, width, background, padding } = value;

  return (
    <>
      <div className={cls.fields}>
        <Input label="iframe url" onChangeValue={handleSetUrl} value={url} />
        <Input label="height" onChangeValue={handleSetHeight} value={height} />
        <Input label="width" onChangeValue={handleSetWidth} value={width} />
        <Input
          label="background"
          onChangeValue={handleSetBackground}
          value={background}
        />
        <Input
          label="padding"
          onChangeValue={handleSetPadding}
          value={padding}
        />
      </div>
      <div
        className={cls.iframeWrapper}
        style={{ background, padding: `${padding}px` }}
      >
        <iframe
          className={cls.iframe}
          title="iframe content"
          src={url}
          height={height}
          width={width}
        />
      </div>
    </>
  );
};
