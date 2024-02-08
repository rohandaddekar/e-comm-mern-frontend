/* eslint-disable react/prop-types */
import { SlOptionsVertical } from "react-icons/sl";
import { LuPhone } from "react-icons/lu";
import { useUpdateDefaultAddress } from "../../apis/address/address";
import { useEffect } from "react";

const Card = ({ data, reFetch }) => {
  const {
    data: dataUpdateDefault,
    // error: errorUpdateDefault,
    isLoading: isLoadingUpdateDefault,
    updateDefaultAddressReq,
  } = useUpdateDefaultAddress();

  const modalHandler = (e, modalName) => {
    e.preventDefault();

    document.getElementById(modalName).showModal();
  };

  const makeDefaultHandler = (id) => {
    !isLoadingUpdateDefault && updateDefaultAddressReq(id);
  };

  useEffect(() => {
    if (dataUpdateDefault) {
      reFetch();
    }
  }, [dataUpdateDefault]);

  return (
    <>
      <div
        className={`col-span-6 border-2 p-5 rounded-md shadow relative ${
          data?.isDefault && "border-green-500"
        }`}
      >
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-md">
            {data?.firstName} {data?.lastName}
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
                onClick={(e) => modalHandler(e, "addressEditModal")}
              >
                Edit
              </li>
              <li
                className="btn-ghost cursor-pointer py-1 px-2 rounded-md"
                onClick={(e) => modalHandler(e, "deleteAlertModal")}
              >
                Delete
              </li>
              {!data?.isDefault && (
                <li
                  className={`btn-ghost cursor-pointer py-1 px-2 rounded-md ${
                    isLoadingUpdateDefault && "disabled"
                  }`}
                  onClick={() => makeDefaultHandler(data?._id)}
                >
                  {isLoadingUpdateDefault ? "Making..." : "Make Default"}
                </li>
              )}
            </ul>
          </div>
        </div>
        <p className="mt-2 text-sm">
          {data?.street}, {data?.city}, {data?.state}, {data?.country} -{" "}
          {data?.pincode}
        </p>
        <p className="mt-1 text-sm flex gap-1 items-center">
          <LuPhone /> {data?.mobile}
        </p>

        {data?.isDefault && (
          <p className="absolute bg-green-400 py-1 px-2 -top-3 left-5 rounded-md text-xs font-bold">
            Default
          </p>
        )}
      </div>

      {/* <div className="col-span-6 border-2 p-5 rounded-md shadow">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-md">Alex Doe</h2>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button">
              <SlOptionsVertical />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-md w-52"
            >
              <li className="btn-ghost cursor-pointer py-1 px-2 rounded-md">
                Edit
              </li>
              <li className="btn-ghost cursor-pointer py-1 px-2 rounded-md">
                Delete
              </li>
              <li className="btn-ghost cursor-pointer py-1 px-2 rounded-md">
                Make Default
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-2 text-sm">
          Room No D-32, Bandra Colony, Bandra, Mumbai, Maharashtra, India -
          400025
        </p>
        <p className="mt-1 text-sm">8852684596</p>
      </div> */}
    </>
  );
};

export default Card;
