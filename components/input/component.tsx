import React, { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: FC<InputProps> = ({ label, ...inputProps }) => {
  return (
    <div className="flex flex-col items-start justify-center">
      <span className="text-white">{label}</span>
      <input
        {...inputProps}
        className="rounded-lg p-1 mt-1 w-full border-transparent focus:outline-none focus:ring focus:border-primary1"
      />
    </div>
  );
};

export default Input;
