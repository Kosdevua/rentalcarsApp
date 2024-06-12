import { Field, Form, Formik } from "formik";
import s from "./Filter.module.css";

const initialValues = {
  brand: "",
  price_per_hour: "",
  km_from: 0,
  km_to: 100000,
};

const Filter = () => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form_wrapper}>
          <div className={s.input_wrapper}>
            <label htmlFor="brand">Car brand</label>

            <Field
              as="select"
              name="brand"
              id="brand"
              //   value="Enter the text"
            >
              <option value="volvo">Volvo</option>
              <option value="honda">Honda</option>
              <option value="hummer">Hummer</option>
            </Field>
          </div>

          <div className={s.input_wrapper}>
            <label htmlFor="price_per_hour">Price/ 1 hour</label>
            <Field
              as="select"
              name="price_per_hour"
              id="price_per_hour"
              value="Price/ 1 hour"
            >
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
            </Field>
          </div>

          <div className={s.input_wrapper}>
            <label htmlFor="km_from">Сar mileage / km</label>
            {/* <span>dry</span> */}
            <div className={s.input_text_wrapper}>
              <Field className={s.input_left} type="text" name="km_from" span />
              <Field className={s.input_right} type="text" name="km_to" />
            </div>
          </div>
          <button className={s.btn} type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default Filter;
