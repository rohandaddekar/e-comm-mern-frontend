/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Button from "../Buttons/Button";
import TextInput from "../Inputs/Text";
import { useCreateAddress } from "../../apis/address/address";
import getInputFieldError from "../../utils/getInputFieldError";
import SelectInput from "../Inputs/Select";

const AddressCreate = ({ reFetch }) => {
  const { data, isLoading, createAddressReq, error } = useCreateAddress();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    street: "",
    city: "",
    state: "",
    country: "India",
    pincode: "",
    isDefault: false,
  });

  const onChangeHandler = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    await createAddressReq(formData);
  };

  useEffect(() => {
    const closeButton = document.getElementById("closeButton");

    if (data) {
      closeButton.click();
      reFetch();
    }
  }, [data]);

  return (
    <>
      <dialog id="addressCreateModal" className="modal">
        <div className="modal-box no-scrollbar">
          <h3 className="font-bold text-lg border-b pb-3 mb-3">Add Address</h3>

          <form className="flex flex-col gap-5" onSubmit={submitHandler}>
            <TextInput
              id={"firstName"}
              type={"text"}
              label={"First Name *"}
              value={formData.firstName}
              onChange={(value) => onChangeHandler("firstName", value)}
              error={getInputFieldError(error?.errors, "firstName")}
            />

            <TextInput
              id={"lastName"}
              type={"text"}
              label={"Last Name *"}
              value={formData.lastName}
              onChange={(value) => onChangeHandler("lastName", value)}
              error={getInputFieldError(error?.errors, "lastName")}
            />

            <TextInput
              disabled
              id={"country"}
              type={"text"}
              label={"Country *"}
              value={formData.country}
              onChange={(value) => onChangeHandler("country", value)}
              error={getInputFieldError(error?.errors, "country")}
            />

            <TextInput
              id={"state"}
              type={"text"}
              label={"State *"}
              value={formData.state}
              onChange={(value) => onChangeHandler("state", value)}
              error={getInputFieldError(error?.errors, "state")}
            />

            <TextInput
              id={"city"}
              type={"text"}
              label={"City *"}
              value={formData.city}
              onChange={(value) => onChangeHandler("city", value)}
              error={getInputFieldError(error?.errors, "city")}
            />

            <TextInput
              id={"street"}
              type={"text"}
              label={"House No. / Address / Street *"}
              value={formData.street}
              onChange={(value) => onChangeHandler("street", value)}
              error={getInputFieldError(error?.errors, "street")}
            />

            <TextInput
              id={"pincode"}
              type={"number"}
              label={"Pincode *"}
              value={formData.pincode}
              onChange={(value) => onChangeHandler("pincode", value)}
              error={getInputFieldError(error?.errors, "pincode")}
            />

            <TextInput
              id={"mobile"}
              type={"text"}
              label={"Mobile *"}
              value={formData.mobile}
              onChange={(value) => onChangeHandler("mobile", value)}
              error={getInputFieldError(error?.errors, "mobile")}
            />

            <SelectInput
              id={"isDefault"}
              label={"Want to make this address as default?"}
              options={[
                {
                  title: "No",
                  value: false,
                },
                {
                  title: "Yes",
                  value: true,
                },
              ]}
              value={formData.isDefault}
              onChange={(value) => onChangeHandler("isDefault", value)}
              error={getInputFieldError(error?.errors, "isDefault")}
            />

            <Button title={"Add"} type={"submit"} isLoading={isLoading} />
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
