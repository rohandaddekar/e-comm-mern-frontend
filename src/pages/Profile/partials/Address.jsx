import AddressCreate from "../../../components/modals/AddressCreate";
import Button from "../../../components/Buttons/Button";
import {
  useDeleteAddress,
  useGetAllAddress,
  useUpdateDefaultAddress,
} from "../../../apis/address/address";
import { useEffect, useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { LuPhone } from "react-icons/lu";
import AddressEdit from "../../../components/modals/AddressEdit";
import DeleteAlert from "../../../components/modals/DeleteAlert";

const Address = () => {
  const { data, getAllAddressReq, isLoading, refetch } = useGetAllAddress();
  const {
    data: updateDefaultData,
    isLoading: updateDefaultIsLoading,
    updateDefaultAddressReq,
  } = useUpdateDefaultAddress();
  const {
    data: deleteData,
    isLoading: deleteIsLoading,
    deleteAddressReq,
  } = useDeleteAddress();

  const [selectedEditId, setSelectedId] = useState(null);
  const [selectedDeleteId, setSelectedDeleteId] = useState(null);

  useEffect(() => {
    getAllAddressReq();
  }, []);

  const modalHandler = (e, modalName, id) => {
    e.preventDefault();

    if (modalName === "addressEditModal") {
      setSelectedId(id);
    } else if (modalName === "deleteAlertModal") {
      setSelectedDeleteId(id);
    }

    document.getElementById(modalName).showModal();
  };

  const makeDefaultHandler = (id) => {
    !updateDefaultIsLoading && updateDefaultAddressReq(id);
  };

  const handleRefetch = () => {
    refetch();
  };

  useEffect(() => {
    if (updateDefaultData) {
      handleRefetch();
    }
  }, [updateDefaultData]);

  return (
    <>
      <div>
        <div className="flex items-center justify-between border-b pb-3">
          <h1 className="text-2xl font-bold text-gray-500">Address</h1>

          <form onSubmit={(e) => modalHandler(e, "addressCreateModal")}>
            <Button type={"submit"} title={"Add Address"} />
          </form>
        </div>

        {isLoading ? (
          <>loading...</>
        ) : data?.addresses?.length === 0 ? (
          <p>no address</p>
        ) : (
          <div className="my-5 grid grid-cols-12 gap-5">
            {data?.addresses?.map((address, i) => (
              <div
                key={i}
                className={`col-span-6 border-2 p-5 rounded-md shadow relative ${
                  address?.isDefault && "border-green-500"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h2 className="font-bold text-md">
                    {address?.firstName} {address?.lastName}
                  </h2>

                  <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button">
                      <SlOptionsVertical />
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-md w-52"
                    >
                      <li
                        className="btn-ghost cursor-pointer py-1 px-2 rounded-md"
                        onClick={(e) =>
                          modalHandler(e, "addressEditModal", address?._id)
                        }
                      >
                        Edit
                      </li>
                      <li
                        className="btn-ghost cursor-pointer py-1 px-2 rounded-md"
                        onClick={(e) =>
                          modalHandler(e, "deleteAlertModal", address?._id)
                        }
                      >
                        Delete
                      </li>
                      {!address?.isDefault && (
                        <li
                          className={`btn-ghost cursor-pointer py-1 px-2 rounded-md ${
                            updateDefaultIsLoading && "disabled"
                          }`}
                          onClick={() => makeDefaultHandler(address?._id)}
                        >
                          {updateDefaultIsLoading
                            ? "Making..."
                            : "Make Default"}
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
                <p className="mt-2 text-sm">
                  {address?.street}, {address?.city}, {address?.state},{" "}
                  {address?.country} - {address?.pincode}
                </p>
                <p className="mt-1 text-sm flex gap-1 items-center">
                  <LuPhone /> {address?.mobile}
                </p>

                {address?.isDefault && (
                  <p className="absolute bg-green-400 py-1 px-2 -top-3 left-5 rounded-md text-xs font-bold">
                    Default
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <AddressCreate reFetch={handleRefetch} />

      <AddressEdit
        selectedId={selectedEditId}
        setSelectedId={setSelectedId}
        reFetch={handleRefetch}
      />

      <DeleteAlert
        data={deleteData}
        isLoading={deleteIsLoading}
        deleteReq={deleteAddressReq}
        selectedId={selectedDeleteId}
        setSelectedId={setSelectedDeleteId}
        reFetch={handleRefetch}
      />
    </>
  );
};

export default Address;
