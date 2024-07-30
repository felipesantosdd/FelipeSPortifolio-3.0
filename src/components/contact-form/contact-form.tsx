"use client";

import { ErrorMessage, Input, InputLabel } from "../ui/input";
import { Button } from "../ui/button";
import { ContactTexts } from "@/types/texts";
import { useContactForm } from "./hooks";  // Certifique-se de importar o hook corretamente
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { CheckIcon } from "../icons/check";
import { motion } from "framer-motion";

interface Props {
  texts: ContactTexts;
}

export const ContactForm = ({ texts }: Props) => {
  const { handleSend, isPending, result } = useContactForm();  // Certifique-se de usar o hook corretamente

  if (result?.isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col justify-center items-center gap-4 h-full mt-8"
      >
        <div className="w-24 h-24">
          <CheckIcon />
        </div>
        <h2 className="text-3xl">{texts.successTitle}</h2>
        <p className="text-gray">{texts.successMessage}</p>
      </motion.div>
    );
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    await handleSend(formData);  // Certifique-se de chamar handleSend ao enviar o formulário
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
      <div className="space-y-2">
        <InputLabel htmlFor="name">{texts.nameLabel}</InputLabel>
        <Input
          placeholder={texts.namePlaceholder}
          name="name"
          id="name"
          error={(result?.errors?.fieldErrors.name?.length || 0) > 0}
        />
        <ErrorMessage>{result?.errors?.fieldErrors.name?.[0]}</ErrorMessage>
      </div>
      <div className="space-y-2">
        <InputLabel htmlFor="message">{texts.messageLabel}</InputLabel>
        <textarea
          className={cn(
            "bg-dark-gray shadow-lg border border-black-red h-40 py-2 text-sm px-4 rounded-lg w-full",
            (result?.errors?.fieldErrors.message?.length || 0) > 0 &&
            "border-error"
          )}
          placeholder={texts.messagePlaceholder}
          name="message"
          id="message"
        />
        <ErrorMessage>{result?.errors?.fieldErrors.message?.[0]}</ErrorMessage>
      </div>
      <Button
        className="w-fit self-center md:self-end border-light-red"
        type="submit"
        disabled={isPending}
      >
        <span>{texts.sendButton}</span>
      </Button>
    </form>
  );
};
