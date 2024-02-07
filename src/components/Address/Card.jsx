import { SlOptionsVertical } from "react-icons/sl";

const Card = () => {
  const modalHandler = (e, modalName) => {
    e.preventDefault();

    document.getElementById(modalName).showModal();
  };

  return (
    <>
      <div className="col-span-6 border-2 border-green-500 p-5 rounded-md shadow relative">
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

        <p className="absolute bg-green-400 py-1 px-2 -top-3 left-5 rounded-md text-xs font-bold">
          Default
        </p>
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
