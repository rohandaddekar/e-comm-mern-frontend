/* eslint-disable react/prop-types */

import { useGetUserDetails, useUpdateUserDetails } from "../../apis/user/user";
import getInputFieldError from "../../utils/getInputFieldError";
import { useEffect, useState } from "react";
import TextInput from "../Inputs/Text";
import Button from "../Buttons/Button";
import Select from "react-select";

const roles = [
  { value: "customer", label: "Customer" },
  { value: "admin", label: "Admin" },
  { value: "superAdmin", label: "Super Admin" },
];

const UserEdit = ({ selectedUserId, setSelectedUserId, reFetchAllUsers }) => {
  const { data, isLoading, getUserDetailsReq } = useGetUserDetails();
  const {
    data: updateData,
    isLoading: updateIsLoading,
    error: updateError,
    updateUserDetailsReq,
  } = useUpdateUserDetails();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
  });

  useEffect(() => {
    selectedUserId && getUserDetailsReq(selectedUserId);
  }, [selectedUserId]);

  useEffect(() => {
    data &&
      setFormData({
        firstName: data?.user?.firstName || "",
        lastName: data?.user?.lastName || "",
        email: data?.user?.email || "",
        role: roles.find((role) => role.value === data?.user?.role) || null,
      });
  }, [data]);

  const onChangeHandler = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateHandler = async (e) => {
    e.preventDefault();

    const updatedData = {
      ...formData,
      role: formData.role ? formData.role.value : null,
    };

    await updateUserDetailsReq(selectedUserId, updatedData);
    reFetchAllUsers();
  };

  useEffect(() => {
    const closeButton = document.getElementById("closeButton");

    updateData && closeButton.click();
  }, [updateData]);

  return (
    <>
      <dialog id="userEditModal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg border-b pb-3 mb-3">Update User</h3>

          {isLoading ? (
            <>loading...</>
          ) : (
            <>
              <form className="flex flex-col gap-5" onSubmit={updateHandler}>
                <TextInput
                  id={"firstName"}
                  type={"text"}
                  label={"First Name *"}
                  value={formData.firstName}
                  onChange={(value) => onChangeHandler("firstName", value)}
                  error={getInputFieldError(updateError?.errors, "firstName")}
                />

                <TextInput
                  id={"lastName"}
                  type={"text"}
                  label={"Last Name *"}
                  value={formData.lastName}
                  onChange={(value) => onChangeHandler("lastName", value)}
                  error={getInputFieldError(updateError?.errors, "lastName")}
                />

                <TextInput
                  id={"email"}
                  type={"email"}
                  label={"Email address *"}
                  placeholder={"john@example.com"}
                  value={formData.email}
                  onChange={(value) => onChangeHandler("email", value)}
                  error={getInputFieldError(updateError?.errors, "email")}
                  disabled={true}
                />

                <div>
                  <span className="text-sm font-medium leading-6 text-gray-900">
                    Role *
                  </span>
                  <Select
                    options={roles}
                    value={formData.role}
                    onChange={(value) => onChangeHandler("role", value)}
                  />
                </div>

                <Button
                  title={"Update"}
                  type={"submit"}
                  isLoading={updateIsLoading}
                />
              </form>

              <form method="dialog" className="mt-3">
                <Button
                  title={"Close"}
                  type={"submit"}
                  extraClasses={"btn-outline"}
                />
              </form>
            </>
          )}
        </div>

        <form method="dialog" className="modal-backdrop">
          <button id="closeButton" onClick={() => setSelectedUserId(null)}>
            close
          </button>
        </form>
      </dialog>
    </>
  );
};

export default UserEdit;
