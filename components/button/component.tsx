import React, { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  icon?: React.ReactElement;
}

const Button: FC<ButtonProps> = ({ icon, children, ...inputProps }) => {
  return (
    <button
      className="bg-primary1 rounded-lg p-2 mt-4 text-white hover:bg-primary1hover"
      {...inputProps}
    >
      {children}
    </button>
  );
};

export default Button;
