import React from "react";
import emailjs from "@emailjs/browser";

export default function useEmail() {
  const [loading, setLoading] = React.useState(false);
  const [disabledButton, setDisabledButton] = React.useState(true);
  const [buttonText, setButtonText] = React.useState("Send");

  const formRef = React.useRef<HTMLFormElement>(null);

  // enable send button if all areas are fill
  const checkDisabled = () => {
    if (!formRef || !formRef.current) return setDisabledButton(true);

    const fullName = formRef.current[0];
    const email = formRef.current[1];
    const message = formRef.current[2];

    // @ts-ignore // kalkacak
    if (!!fullName.value && !!email.value && !!message.value) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  };

  // send email function
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement> | undefined
  ) => {
    const service = process.env.NEXT_PUBLIC_EMALJS_SERVICE;
    const template = process.env.NEXT_PUBLIC_EMALJS_TEMPLATE;
    const key = process.env.NEXT_PUBLIC_EMALJS_KEY;

    if (!e || !service || !template || !key) return;

    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(service, template, e.currentTarget, {
        publicKey: key,
      });

      setButtonText("Sent!");
      setLoading(false);

      setTimeout(() => setButtonText("Send"), 2000);
    } catch {
      setButtonText("Sorry! An error occured.");
      setLoading(false);

      setTimeout(() => setButtonText("Send"), 2000);
    }
  };

  return {
    loading,
    disabledButton,
    buttonText,
    formRef,
    checkDisabled,
    handleSubmit,
  };
}
