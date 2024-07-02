import React from "react";
import emailjs from "@emailjs/browser";

export default function useEmail() {
  const [loading, setLoading] = React.useState(false);
  const [form, setForm] = React.useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [disabledButton, setDisabledButton] = React.useState(true);
  const [buttonText, setButtonText] = React.useState("Send");

  const handleInputs = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // enable send button if all areas are fill
  React.useEffect(() => {
    if (!form.fullName || !form.email || !form.message)
      return setDisabledButton(true);

    setDisabledButton(false);
  }, [form]);

  // send email function
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement> | undefined
  ) => {
    if (!e) return;
    e.preventDefault();

    const service = process.env.NEXT_PUBLIC_EMALJS_SERVICE;
    const template = process.env.NEXT_PUBLIC_EMALJS_TEMPLATE;
    const key = process.env.NEXT_PUBLIC_EMALJS_KEY;

    if (!service || !template || !key) return;

    setLoading(true);

    try {
      await emailjs.sendForm(service, template, e.currentTarget, {
        publicKey: key,
      });

      setForm({ fullName: "", email: "", message: "" });

      setButtonText("Sent!");

      setTimeout(() => setButtonText("Send"), 2000);
    } catch {
      setButtonText("Sorry! An error occured.");

      setTimeout(() => setButtonText("Send"), 2000);
    }

    setLoading(false);
  };

  return {
    form,
    loading,
    disabledButton,
    buttonText,
    handleInputs,
    handleSubmit,
  };
}
