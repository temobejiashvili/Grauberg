import React from "react";
import { useTranslation } from "react-i18next";

//@ts-ignore
const ContactForm = ({ onSubmit }) => {
  const { t } = useTranslation();
  return (
    <form onSubmit={onSubmit}>
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
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:primary"
        />
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
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:primary"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {t("message")}
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:primary"
        ></textarea>
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
