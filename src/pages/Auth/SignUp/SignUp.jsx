import { NavLink } from "react-router-dom";
import AuthLayout from "../../../layouts/AuthLayout";
import Button from "../../../components/Buttons/Button";
import TextInput from "../../../components/Inputs/Text";
import useSignUp from "../../../apis/signUp/signUp";
import { useState } from "react";
import getInputFieldError from "../../../utils/getInputFieldError";

const SignUp = () => {
  const { isLoading, error, signUpReq } = useSignUp();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const signUpHandler = (e) => {
    e.preventDefault();
    signUpReq(formData);
  };

  return (
    <AuthLayout>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <NavLink to={"/"}>
            <img
              className="mx-auto h-10 w-auto"
              src="../../../../images/logo.svg"
              alt="Logo"
            />
          </NavLink>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign Up
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={signUpHandler}>
            <div>
              <div className="mt-2">
                <TextInput
                  id={"firstName"}
                  type={"text"}
                  label={"First Name"}
                  placeholder={"John"}
                  value={formData.firstName}
                  onChange={(value) => onChangeHandler("firstName", value)}
                  error={getInputFieldError(error?.errors, "firstName")}
                />
              </div>
            </div>
            <div>
              <div className="mt-2">
                <TextInput
                  id={"lastName"}
                  type={"text"}
                  label={"Last Name"}
                  placeholder={"Doe"}
                  value={formData.lastName}
                  onChange={(value) => onChangeHandler("lastName", value)}
                  error={getInputFieldError(error?.errors, "lastName")}
                />
              </div>
            </div>

            <div>
              <div className="mt-2">
                <TextInput
                  id={"email"}
                  type={"email"}
                  label={"Email address"}
                  placeholder={"john@example.com"}
                  value={formData.email}
                  onChange={(value) => onChangeHandler("email", value)}
                  error={getInputFieldError(error?.errors, "email")}
                />
              </div>
            </div>

            <div>
              <div className="mt-2">
                <TextInput
                  id={"password"}
                  type={"password"}
                  label={"Password"}
                  placeholder={"********"}
                  value={formData.password}
                  onChange={(value) => onChangeHandler("password", value)}
                  error={getInputFieldError(error?.errors, "password")}
                />
              </div>
            </div>

            <Button title={"Sign Up"} type={"submit"} isLoading={isLoading} />
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <NavLink
              to="/sign-in"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sign In
            </NavLink>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
