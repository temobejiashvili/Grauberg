"use client";
import React, { useState } from "react";
import Image from "next/image";
import LoaderComponent from "../loaderComponent/LoaderComponent";
import { useTranslation } from "react-i18next";
import { contactInfo } from "@/content/contactInfo";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    note: "",
  });
  const { t } = useTranslation("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://grauberg.com.ge/main/contact-us", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert(t("messageSentSuccess"));
      } else {
        console.error("Failed to send message:", response.statusText);
      }
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };

  return (
    <div className="flex flex-col gap-24 pt-52 max-900:pt-24 px-32 bg-gray-100 max-1250:px-16 max-900:px-6">
      <section className="flex justify-between items-center max-1100:flex-col max-1100:gap-12">
        <aside className="flex flex-col gap-12 max-900:gap-8 max-900:w-96">
          <header>
            <h2 className="text-black text-4xl font-bold max-900:text-2xl">
              {t("contact")}
            </h2>
            <p className="text-black max-w-lg max-900:text-[14px] mt-[12px]">
              {t("contactDescription")}
            </p>
          </header>
          <ul className="flex flex-col gap-6">
            {contactInfo.map(({ icon, alt, value, href }, index) => (
              <li key={index} className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg bg-red-600 flex justify-center items-center shadow-md">
                  <Image src={icon} alt={alt} width={26} height={26} />
                </div>
                <a className="font-medium text-black leading-7" href={href}>
                  {t(value)}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        <aside>
          <form
            onSubmit={handleSubmit}
            className="bg-white p-1 rounded-xl shadow-lg"
          >
            <div className="bg-gray-100 p-6 rounded-xl">
              <div className="border border-gray-300 rounded-lg bg-white flex flex-col gap-4 p-6">
                {["name", "phone", "email"].map((field) => (
                  <input
                    key={field}
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    className="w-96 max-900:w-72 h-14 border border-gray-300 rounded-md px-4 text-gray-700"
                    placeholder={t(field)}
                    value={formData[field as keyof typeof formData]}
                    onChange={handleInputChange}
                  />
                ))}
                <textarea
                  name="note"
                  className="w-96 max-900:w-72 h-48 border border-gray-300 rounded-md px-4 py-3 resize-none text-gray-700"
                  placeholder={t("comment")}
                  value={formData.note}
                  onChange={handleInputChange}
                />
                <button
                  type="submit"
                  className="h-12 rounded-full text-white bg-red-600"
                >
                  {t("send")}
                </button>
              </div>
            </div>
          </form>
        </aside>
      </section>

      <LoaderComponent>
        <section className="w-full h-96 border-4 border-white rounded-xl max-900:w-96 max-900:h-[30rem]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1539.526411855878!2d21.014668246839673!3d52.243065148393576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc6744146b3f%3A0x29d4dd8ead0dc6f6!2sPresidential%20Palace!5e0!3m2!1ska!2sge!4v1734501488978!5m2!1ska!2sge"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
      </LoaderComponent>
    </div>
  );
};

export default ContactPage;
