"use client";
import Image from "next/image";
import React, { Fragment } from "react";
import Input from "../input";
import Button from "../button";
import From from "../form";

const Login: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    console.log("====================================");
    console.log(e);
    console.log("====================================");
  };

  return (
    <section className="max-w-sm rounded-lg">
      <div className="flex flex-col p-4">
        <div className="flex flex-row items-center justify-start">
          <Image src={"/images/logo.svg"} alt="logo" width={50} height={50} />
          <span className="text-white text-2xl ml-2">Connect</span>
        </div>

        <span className="text-white mt-2 text-lg">Welcome to connect.</span>

        <span className="text-white mt-2 text-xs">
          Continue with google or enter your details
        </span>

        <button className="bg-white rounded-lg flex flex-row justify-center items-center p-1 mt-2">
          <Image src={"/images/google.png"} alt="logo" width={20} height={20} />
          <span className="ml-2 text-sm">login with google</span>
        </button>

        <div className="mt-2">
          <div className="text-white flex justify-center items-center -mb-3">
            <span className="bg-primary2 pr-5 pl-5">or</span>
          </div>
          <hr className="w-full" />
        </div>

        {/* <form onSubmit={handleSubmit} className="flex flex-col">
          <Input label="username" type="text" name="username" />
          <Input label="password" type="text" name="password" />
          <Button type="submit">Login</Button>
        </form> */}

        <From onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <Input label="username" type="text" name="username" />
            <Input label="password" type="text" name="password" />
            <Button type="submit">Login</Button>
          </div>
        </From>
      </div>
    </section>
  );
};

export default Login;
