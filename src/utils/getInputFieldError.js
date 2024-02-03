const getInputFieldError = (errors, field) => {
  return errors?.find((error) => error.path === field);
};

export default getInputFieldError;
