type Button = {
  children: JSX.Element | string;
  className?: string;
  onClick?: () => void;
};

export const Button = ({ children, className, onClick }: Button) => {
  return (
    <button
      type="submit"
      className={`bg-gray-700 w-full p-2 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
