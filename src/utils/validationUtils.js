import * as yup from "yup";

class ValidationUtils {
  authValidation = yup.object({
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(6, "Minimum password at least 6 character").required("Password is required"),
  });
}

export default new ValidationUtils();
