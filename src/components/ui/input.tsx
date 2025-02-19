type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required?: boolean;
  type: "email" | "password" | "checkbox" | "radio" | "text" | "number";
  name?: string;
  className: string;
  icon?: React.ReactElement;
};
export const Input: React.FC<Props> = ({
  value,
  onChange,
  placeholder,
  type,
  className,
  name,
  required,
}) => {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={type}
      className={className}
      name={name}
      required={required}
    />
  );
};
