import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormularioEmail = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('E-mail inválido')
        .required('Campo obrigatório'),
    }),
    onSubmit: values => {
      alert(`E-mail válido: ${values.email}`);
    },
  });

  return (
    <div className="container mt-4">
      <h2>Formulário de E-mail</h2>
      <form onSubmit={formik.handleSubmit}>
      <div className="form-group row">
        <label htmlFor="email" className="col-sm-1 offset-sm-3 col-form-label">Email</label>
        <div className="col-sm-4">
          <input
            id="email"
            name="email"
            type="email"
            className={`form-control ${formik.errors.email ? 'is-invalid' : ''}`}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? <div className="invalid-feedback">{formik.errors.email}</div> : null}
        </div>
        </div>
        <br></br>
        <button type="submit" className="btn btn-primary">Validar</button>
      </form>
    </div>
  );
};

export default FormularioEmail;

