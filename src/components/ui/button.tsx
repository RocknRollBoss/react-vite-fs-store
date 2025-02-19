type Props = {
  type?: "submit" | "reset" | "button";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};
export const Button: React.FC<Props> = ({
  children,
  className,
  type,
  onClick,
}) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
};
