import { useState } from "react";
import Button from "../Buttons/Button";
import TextInput from "../Inputs/Text";

const AddressCreate = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    street: "",
    city: "",
    state: "",
    country: "India",
    pincode: "",
  });

  const onChangeHandler = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <>
      <dialog id="addressCreateModal" className="modal">
        <div className="modal-box no-scrollbar">
          <h3 className="font-bold text-lg border-b pb-3 mb-3">Add Address</h3>

          <form
            className="flex flex-col gap-5"
            // onSubmit={submitHandler}
          >
            <TextInput
              id={"firstName"}
              type={"text"}
              label={"First Name *"}
              value={formData.firstName}
              onChange={(value) => onChangeHandler("firstName", value)}
              // error={getInputFieldError(error?.errors, "firstName")}
            />

            <TextInput
              id={"lastName"}
              type={"text"}
              label={"Last Name *"}
              value={formData.lastName}
              onChange={(value) => onChangeHandler("lastName", value)}
              // error={getInputFieldError(error?.errors, "lastName")}
            />

            <TextInput
              disabled
              id={"country"}
              type={"text"}
              label={"Country *"}
              value={formData.country}
              onChange={(value) => onChangeHandler("country", value)}
              // error={getInputFieldError(error?.errors, "country")}
            />

            <TextInput
              id={"state"}
              type={"text"}
              label={"State *"}
              value={formData.state}
              onChange={(value) => onChangeHandler("state", value)}
              // error={getInputFieldError(error?.errors, "state")}
            />

            <TextInput
              id={"city"}
              type={"text"}
              label={"City *"}
              value={formData.city}
              onChange={(value) => onChangeHandler("city", value)}
              // error={getInputFieldError(error?.errors, "city")}
            />

            <TextInput
              id={"street"}
              type={"text"}
              label={"House No. / Address / Street *"}
              value={formData.street}
              onChange={(value) => onChangeHandler("street", value)}
              // error={getInputFieldError(error?.errors, "street")}
            />

            <TextInput
              id={"pincode"}
              type={"number"}
              label={"Pincode *"}
              value={formData.pincode}
              onChange={(value) => onChangeHandler("pincode", value)}
              // error={getInputFieldError(error?.errors, "pincode")}
            />

            <TextInput
              id={"mobile"}
              type={"text"}
              label={"Mobile *"}
              value={formData.mobile}
              onChange={(value) => onChangeHandler("mobile", value)}
              // error={getInputFieldError(error?.errors, "mobile")}
            />

            <Button
              title={"Add"}
              type={"submit"}
              // isLoading={isLoading}
            />
          </form>

          <form method="dialog" className="mt-3">
            <Button
              title={"Close"}
              type={"submit"}
              extraClasses={"btn-outline"}
            />
          </form>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button id="closeButton">close</button>
        </form>
      </dialog>
    </>
  );
};

export default AddressCreate;
