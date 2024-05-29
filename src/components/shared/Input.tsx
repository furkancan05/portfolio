import React from "react";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
}

export function Input(props: InputProps) {
  const { label, ...rest } = props;

  return (
    <div className="flex flex-col text-sm gap-2">
      <label htmlFor={label}>{label}</label>
      <input
        type="text"
        id={label}
        className="py-3 px-5 rounded-lg bg-transparent outline outline-white/10 focus:outline-white/80 placeholder:text-sm"
        {...rest}
      />
    </div>
  );
}

interface TextAreaProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label: string;
}

export function TextArea(props: TextAreaProps) {
  const { label, ...rest } = props;

  return (
    <div className="flex flex-col text-sm gap-2">
      <label htmlFor={props.label}>{props.label}</label>
      <textarea
        style={{ height: 150 }}
        rows={5}
        className="py-3 px-5 h-[300px] rounded-lg bg-transparent outline outline-white/10 focus:outline-white/80 placeholder:text-sm resize-none"
        {...rest}
      />
    </div>
  );
}
