import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";

interface IFormInput {
  name: string;
  number: string;
  email: string;
  note: string;
}
type TArgs = {
  onClose: () => void;
};
const RequestCallForm = ({ onClose }: TArgs) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmitForm: SubmitHandler<IFormInput> = async (data) => {
    onClose();
    const response = await fetch("https://grauberg.com.ge/main/call-requests", {
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
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {t("name")}
        </label>
        <input
          type="text"
          id="name"
          {...register("name", { required: true })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:primary"
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{t("required")}</span>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {t("phone")}
        </label>
        <input
          type="tel"
          id="phone"
          {...register("number", { required: true })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:primary"
        />
        {errors.number && (
          <span className="text-red-500 text-sm">{t("required")}</span>
        )}
      </div>
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
          htmlFor="note"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {t("note")}
        </label>
        <textarea
          id="note"
          rows={3}
          {...register("note", { required: true })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:primary"
        ></textarea>
        {errors.note && (
          <span className="text-red-500 text-sm">{t("required")}</span>
        )}
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-4 py-2 bg-primary text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          {t("submitRequest")}
        </button>
      </div>
    </form>
  );
};

export default RequestCallForm;
