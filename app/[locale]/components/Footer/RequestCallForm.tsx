import React from "react";
import { useTranslation } from "react-i18next";

//@ts-ignore
const RequestCallForm = ({ onSubmit }) => {
  const { t } = useTranslation();
  return (
    <form onSubmit={onSubmit}>
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
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:primary"
        />
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
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:primary"
        />
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
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:primary"
        />
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
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:primary"
        ></textarea>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-4 py-2 bg-primary text-white rounded-md focus:outline-none focus:ring-2focus:ring-offset-2"
        >
          {t("submitRequest")}
        </button>
      </div>
    </form>
  );
};

export default RequestCallForm;
