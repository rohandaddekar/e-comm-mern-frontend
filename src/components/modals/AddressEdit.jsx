/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Button from "../Buttons/Button";
import TextInput from "../Inputs/Text";
import { useGetAddress, useUpdateAddress } from "../../apis/address/address";
import getInputFieldError from "../../utils/getInputFieldError";

const AddressEdit = ({ selectedId, setSelectedId, reFetch }) => {
  const { data, isLoading, getAddressReq } = useGetAddress();
  const {
    data: updateData,
    isLoading: updateIsLoading,
    error: updateError,
    updateAddressReq,
  } = useUpdateAddress();

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

  useEffect(() => {
    selectedId && getAddressReq(selectedId);
  }, [selectedId]);

  useEffect(() => {
    if (data) {
      setFormData({
        firstName: data.address.firstName || "",
        lastName: data.address.lastName || "",
        mobile: data.address.mobile || "",
        street: data.address.street || "",
        city: data.address.city || "",
        state: data.address.state || "",
        country: data.address.country || "India",
        pincode: data.address.pincode || "",
        isDefault: data.address.isDefault || "",
      });
    }
  }, [data]);

  const updateHandler = async (e) => {
    e.preventDefault();

    await updateAddressReq(selectedId, formData);
  };

  useEffect(() => {
    const closeButton = document.getElementById("closeButtonAddressEdit");

    if (updateData) {
      closeButton.click();
      reFetch();
    }
  }, [updateData]);

  return (
    <>
      <dialog id="addressEditModal" className="modal">
        <div className="modal-box no-scrollbar">
          <h3 className="font-bold text-lg border-b pb-3 mb-3">
            Update Address
          </h3>

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
                  disabled
                  id={"country"}
                  type={"text"}
                  label={"Country *"}
                  value={formData.country}
                  onChange={(value) => onChangeHandler("country", value)}
                  error={getInputFieldError(updateError?.errors, "country")}
                />

                <TextInput
                  id={"state"}
                  type={"text"}
                  label={"State *"}
                  value={formData.state}
                  onChange={(value) => onChangeHandler("state", value)}
                  error={getInputFieldError(updateError?.errors, "state")}
                />

                <TextInput
                  id={"city"}
                  type={"text"}
                  label={"City *"}
                  value={formData.city}
                  onChange={(value) => onChangeHandler("city", value)}
                  error={getInputFieldError(updateError?.errors, "city")}
                />

                <TextInput
                  id={"street"}
                  type={"text"}
                  label={"House No. / Address / Street *"}
                  value={formData.street}
                  onChange={(value) => onChangeHandler("street", value)}
                  error={getInputFieldError(updateError?.errors, "street")}
                />

                <TextInput
                  id={"pincode"}
                  type={"number"}
                  label={"Pincode *"}
                  value={formData.pincode}
                  onChange={(value) => onChangeHandler("pincode", value)}
                  error={getInputFieldError(updateError?.errors, "pincode")}
                />

                <TextInput
                  id={"mobile"}
                  type={"text"}
                  label={"Mobile *"}
                  value={formData.mobile}
                  onChange={(value) => onChangeHandler("mobile", value)}
                  error={getInputFieldError(updateError?.errors, "mobile")}
                />

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
          <button
            id="closeButtonAddressEdit"
            onClick={() => setSelectedId(null)}
          >
            close
          </button>
        </form>
      </dialog>
    </>
  );
};

export default AddressEdit;
