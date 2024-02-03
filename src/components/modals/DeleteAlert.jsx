/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Button from "../Buttons/Button";

const DeleteAlert = ({
  data,
  isLoading,
  deleteReq,
  selectedId,
  setSelectedId,
  reFetch,
}) => {
  const deleteHandler = async (e) => {
    e.preventDefault();
    await deleteReq(selectedId);
    reFetch();
  };

  useEffect(() => {
    const closeButton = document.getElementById("closeButtonDeleteAlert");

    data && closeButton.click();
  }, [data]);

  return (
    <>
      <dialog id="deleteAlertModal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg border-b pb-3 mb-1">
            Delete Confirmation
          </h3>
          <p className="py-4">Are you sure that you want to delete this</p>

          <form onSubmit={deleteHandler}>
            <Button title={"Delete"} type={"submit"} isLoading={isLoading} />
          </form>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button
            id="closeButtonDeleteAlert"
            onClick={() => setSelectedId(null)}
          >
            close
          </button>
        </form>
      </dialog>
    </>
  );
};

export default DeleteAlert;
