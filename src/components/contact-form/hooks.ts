import { useState, useCallback } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const useContactForm = () => {
  const [result, setResult] = useState<any>(null);
  const [isPending, setIsPending] = useState(false);

  const handleSend = useCallback(async (formData: any) => {
    setIsPending(true);
    const name = formData.get('name');
    const message = formData.get('message');
    console.log("Nome:", name);
    console.log("Mensagem:", message);

    const whatsappMessage = `Olá, meu nome é ${name}.\n${message}`;

    const whatsappLink = `https://wa.me/5535999291958?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappLink, '_blank');

    setResult({ isSuccess: true });
    setIsPending(false);
  }, []);

  useEffect(() => {
    if (result) {
      if (result.isServerError) {
        toast.error("Ocorreu um erro inesperado. Tente novamente mais tarde.");
      } else if (!result.isSuccess) {
        toast.error("Erro ao enviar o formulário. Verifique os campos e tente novamente.");
      } else {
        toast.success("Formulário enviado com sucesso!");
      }
    }
  }, [result]);

  return {
    result,
    handleSend,
    isPending,
  };
};
