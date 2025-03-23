import "./form.css";

import React from "react";
import { Formik } from "formik";

import { supportSchema } from "../../../hooks/dataTools";
import { PostData } from "../../../hooks/fetchData";
import { databaseUrl } from "../../../config";
export default function MainPageForm() {
  return (
    <article className="form-section" id="form">
      <h2>НАПИШИТЕ НАМ</h2>
      <Formik
        initialValues={{ name: "", phone: "", email: "", theme: "", text: "" }}
        validationSchema={supportSchema}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            const data = {
              data: {
                fullname: values.name,
                telephone: values.phone,
                email: values.email,
                theme: values.theme,
                text: values.text,
              },
            };
            PostData(`${databaseUrl}/api/main-page-forms`, data);
            values.name = "";
            values.phone = "";
            values.email = "";
            values.theme = "";
            values.text = "";
          }, 2000);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} className="support-form">
            <input
              fullWidth
              variant="outlined"
              type="text"
              placeholder="Полное имя (Фамилия, имя, отчество полностью)"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.name && true}
            />

            {console.log(errors.name)}
            <input
              error={errors.phone && true}
              fullWidth
              variant="outlined"
              type="text"
              placeholder="Телефон"
              name={"phone"}
              onChange={handleChange}
              onBlur={() => {
                values.phone = values.phone
                  .replace(/\D/g, "")
                  .replace(/^(3730|373|0)/, "");
              }}
              value={values.phone}
            />
            <input
              fullWidth
              variant="outlined"
              type="text"
              placeholder="E-mail"
              name={"email"}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email && true}
            />
            <input
              fullWidth
              variant="outlined"
              type="text"
              placeholder="Тема обращения"
              name={"theme"}
              value={values.theme}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.theme && true}
            />
            <input
              fullWidth
              variant="outlined"
              type="text"
              placeholder="Текст обращения"
              name={"text"}
              value={values.text}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.text && true}
            />
            <div style={{ color: "#ff0000" }}>
              <p>{errors.name}</p>
              <p>{errors.phone}</p>
              <p>{errors.email}</p>
              <p>{errors.theme}</p>
              <p>{errors.text}</p>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="send-button"
            >
              ОТПРАВИТЬ
            </button>
          </form>
        )}
      </Formik>
    </article>
  );
}
