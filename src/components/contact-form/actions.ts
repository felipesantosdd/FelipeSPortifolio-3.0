"use server";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import dotenv from "dotenv";

dotenv.config();

const sendEmailSchema = z.object({
  name: z.string().min(1, { message: "Nome é obrigatório" }),
  email: z.string().email({ message: "Email inválido" }),
  message: z
    .string()
    .min(1, { message: "Mensagem é obrigatória" })
    .max(5000, { message: "Mensagem muito longa" }),
});

const envSchema = z.object({
  RECEIVER_EMAIL: z.string().min(1),
  SENDER_EMAIL: z.string().min(1),
  EMAILJS_PUBLIC_KEY: z.string().min(1),
  EMAILJS_SERVICE_ID: z.string().min(1),
  EMAILJS_TEMPLATE_ID: z.string().min(1),
});

type FormType = z.infer<typeof sendEmailSchema>;
type Response = {
  isSuccess: boolean;
  isServerError?: boolean;
  errors?: Record<string, string>;
};

export const sendEmail = async (
  _: unknown,
  data: FormData
): Promise<Response> => {
  console.log("sendEmail called");

  const result = sendEmailSchema.safeParse({
    name: data.get("name"),
    email: data.get("email"),
    message: data.get("message"),
  });

  if (!result.success) {
    console.log("Validation failed", result.error.flatten());
    return {
      isSuccess: false,
      errors: result.error.flatten(),
    };
  }

  const values = result.data;
  console.log("Form data validated", values);

  console.log("Environment variables", {
    RECEIVER_EMAIL: process.env.RECEIVER_EMAIL,
    SENDER_EMAIL: process.env.SENDER_EMAIL,
    EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY,
    EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
  });

  const envResult = envSchema.safeParse(process.env);
  if (!envResult.success) {
    console.log("Environment validation failed", envResult.error.flatten());
    return {
      isSuccess: false,
      isServerError: true,
    };
  }

  console.log("Environment variables validated", envResult.data);

  try {
    const templateParams = {
      name: values.name,
      email: values.email,
      message: values.message,
    };

    console.log("Sending email with params", templateParams);

    await emailjs.send(
      envResult.data.EMAILJS_SERVICE_ID,
      envResult.data.EMAILJS_TEMPLATE_ID,
      templateParams,
      envResult.data.EMAILJS_PUBLIC_KEY
    );

    console.log("Email sent successfully");

  } catch (error) {
    console.error("Error sending email", error);

    return {
      isSuccess: false,
      isServerError: true,
    };
  }

  return {
    isSuccess: true,
  };
};
