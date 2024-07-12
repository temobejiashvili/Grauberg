import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";

interface IFormInput {
  email: string;
  subject: string;
  text: string;
}

type TArgs = {
  onClose: () => void;
};

const ContactForm = ({ onClose }: TArgs) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmitForm: SubmitHandler<IFormInput> = async (data) => {
    onClose();
    const response = await fetch("https://grauberg.com.ge/main/contact-us", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(response);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {t("email")}
        </label>
        <input
          type="email"
          id="email"
          {...register("email", { required: true })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:primary"
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{t("required")}</span>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {t("subject")}
        </label>
        <input
          type="text"
          id="subject"
          {...register("subject", { required: true })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:primary"
        />
        {errors.subject && (
          <span className="text-red-500 text-sm">{t("required")}</span>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {t("message")}
        </label>
        <textarea
          id="text"
          rows={4}
          {...register("text", { required: true })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:primary"
        ></textarea>
        {errors.text && (
          <span className="text-red-500 text-sm">{t("required")}</span>
        )}
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-4 py-2 bg-primary text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          {t("send")}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
