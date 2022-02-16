// Yup
import * as Yup from "yup";

// Validaciones del formulario de login
export const LOGIN_SCHEMA = Yup.object().shape({
  usuario: Yup.string()
    .min(6, "El usuario debe ser de 6 carácteres!")
    .max(6, "El usuario debe ser de 6 carácateres!")
    .matches(
      /^[a-zA-Z0-9]+$/,
      "El usuario solo puede contener letras y números!"
    )
    .required("El usuario es requerido!"),
  contrasena: Yup.string()
    .min(8, "La contraseña debe ser de 8 carácteres!")
    .max(8, "La contraseña debe ser de 8 carácteres!")
    .matches(
      /^[a-zA-Z0-9]+$/,
      "La contraseña solo puede contener letras y números!"
    )
    .required("La contraseña es requerida!"),
});
