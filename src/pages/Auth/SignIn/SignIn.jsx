/* eslint-disable react/no-unescaped-entities */
import getInputFieldError from "../../../utils/getInputFieldError";
import { NavLink } from "react-router-dom";
import Button from "../../../components/Buttons/Button";
import TextInput from "../../../components/Inputs/Text";
import { useState } from "react";
import AuthLayout from "../../../layouts/AuthLayout";
import useSignIn from "../../../apis/signIn/signIn";

const SignIn = () => {
  const { isLoading, error, signInReq } = useSignIn();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const signInHandler = (e) => {
    e.preventDefault();
    signInReq(formData);
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
            Sign In
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={signInHandler}>
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
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <NavLink
                    to="/forgot-password"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </NavLink>
                </div>
              </div>
              <div className="mt-2">
                <TextInput
                  id={"password"}
                  type={"password"}
                  placeholder={"********"}
                  value={formData.password}
                  onChange={(value) => onChangeHandler("password", value)}
                  error={getInputFieldError(error?.errors, "password")}
                />
              </div>
            </div>

            <Button title={"Sign In"} type={"submit"} isLoading={isLoading} />
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <NavLink
              to="/sign-up"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sign Up
            </NavLink>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignIn;
