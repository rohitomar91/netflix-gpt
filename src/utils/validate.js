export const checkValidData = (email, pass, name) => {
  const isValidEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const isValidPass =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(pass);

  const isValueName = /^[a-zA-Z ]{2,30}$/.test(name);

  if (!isValueName) return "Name is not valid!";
  if (!isValidEmail) return "Email id is not valid!";
  if (!isValidPass) return "Password is not valid!";

  return null;
};
