import React from "react";

interface InputProps {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export function Input(props: InputProps) {
  return (
    <div className="flex flex-col text-sm gap-2">
      <label htmlFor={props.label}>{props.label}</label>
      <input
        type="text"
        required
        name={props.name}
        id={props.label}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        className="py-3 px-5 rounded-lg bg-transparent outline outline-white/10 focus:outline-white/80 placeholder:text-sm"
      />
    </div>
  );
}

export function TextArea(props: InputProps) {
  return (
    <div className="flex flex-col text-sm gap-2">
      <label htmlFor={props.label}>{props.label}</label>
      <textarea
        required
        style={{ height: 150 }}
        onChange={props.onChange}
        rows={5}
        name={props.name}
        id={props.label}
        value={props.value}
        placeholder={props.placeholder}
        className="py-3 px-5 h-[300px] rounded-lg bg-transparent outline outline-white/10 focus:outline-white/80 placeholder:text-sm resize-none"
      />
    </div>
  );
}
