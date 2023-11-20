import { ChangeEvent, InputHTMLAttributes } from "react";

type InputProps = {
  label: string;
  onChangeValue?: (data: string) => void;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = (props: InputProps) => {
  const { label, onChangeValue, onChange, ...restProps } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
    onChangeValue?.(e.target.value);
  };

  return (
    <label>
      {label}
      <input {...restProps} type="text" onChange={handleChange} />
    </label>
  );
};
