import AddressCreate from "../../../components/modals/AddressCreate";
import DeleteAlert from "../../../components/modals/DeleteAlert";
import Button from "../../../components/Buttons/Button";
import Card from "../../../components/Address/Card";

const Address = () => {
  const modalHandler = (e, modalName) => {
    e.preventDefault();

    document.getElementById(modalName).showModal();
  };

  return (
    <>
      <div>
        <div className="flex items-center justify-between border-b pb-3">
          <h1 className="text-2xl font-bold text-gray-500">Address</h1>

          <form onSubmit={(e) => modalHandler(e, "addressCreateModal")}>
            <Button type={"submit"} title={"Add Address"} />
          </form>
        </div>

        <div className="my-5 grid grid-cols-12 gap-5">
          <Card />
        </div>
      </div>

      <AddressCreate />

      <DeleteAlert
      // data={deleteData}
      // isLoading={deleteIsLoading}
      // deleteReq={deleteProductReq}
      // selectedId={selectedDeleteId}
      // setSelectedId={setSelectedDeleteId}
      // reFetch={handleRefetch}
      />
    </>
  );
};

export default Address;
