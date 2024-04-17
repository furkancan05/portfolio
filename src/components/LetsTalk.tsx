import React from "react";
import emailjs from "@emailjs/browser";

import Title from "./Title";

export default function LetsTalk() {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const [inputs, setInputs] = React.useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);

    // const response = await emailjs.sendForm(
    //   "service_49woq7j",
    //   "template_tcgpbkq",
    //   inputs,
    //   {
    //     publicKey: "Pg-SlRkGVEmk-JPL_",
    //   }
    // );

    // if (response.status !== 200) {
    //   setLoading(false);
    //   setError(true);
    // }

    setLoading(false);
  };

  return (
    <section className="px-[160px]">
      <Title title="Lets Talk" />

      <div className="flex items-center justify-between gap-10">
        <div className="flex-1 font-extrabold leading-[70px] uppercase">
          <p className="text-3xl">Lets build together</p>
          <p className="text-[72px]">
            something <span className="text-primary text-[80px]">COOL</span>
          </p>
        </div>

        <form className="flex-1 min-w-[400px] font-bold bg-black/20 rounded-md px-10 py-5 border border-white/20">
          <Input
            label="Full Name"
            name="fullName"
            placeholder="Enter your full name"
            value={inputs.fullName}
            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
          />

          <Input
            label="Email"
            name="email"
            placeholder="Enter your email"
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />

          <Input
            label="Message"
            name="message"
            placeholder="Enter your message"
            value={inputs.message}
            onChange={(e) => setInputs({ ...inputs, message: e.target.value })}
          />

          <button
            type="submit"
            disabled={!inputs.email || !inputs.fullName || !inputs.message}
            onClick={handleSubmit}
            className="text-lg bg-primary/90 rounded-full py-3 w-full hover:bg-primary transition-colors disabled:bg-primary/20 disabled:text-white/50"
          >
            {loading ? "Sending" : error ? "Try later" : "Sent"}
          </button>
        </form>
      </div>
    </section>
  );
}

interface InputProps {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input(props: InputProps) {
  return (
    <div className="flex flex-col gap-2 my-10">
      <label htmlFor={props.label}>{props.label}</label>
      <input
        type="text"
        required
        name={props.name}
        id={props.label}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        className="py-3 px-5 rounded-full bg-transparent outline outline-white/10 focus:outline-white/80 placeholder:text-sm"
      />
    </div>
  );
}
