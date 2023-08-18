"use client";
import React, { FC, FormEventHandler } from "react";
import Input from "../input";
import Button from "../button";

interface FormProps {
  children: JSX.Element;
  onSubmit: FormEventHandler<HTMLFormElement>;
}

const From: FC<FormProps> = ({
  onSubmit,
  children,
  ...formProps
}): JSX.Element => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col" {...formProps}>
      <Input label="username" type="text" name="username" />
      <Input label="password" type="text" name="password" />
      <Button type="submit">Login</Button>
    </form>
  );
};

export default From;
