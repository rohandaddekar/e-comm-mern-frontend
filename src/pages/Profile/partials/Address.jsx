import AddressCreate from "../../../components/modals/AddressCreate";
import Button from "../../../components/Buttons/Button";
import Card from "../../../components/Address/Card";
import { useGetAllAddress } from "../../../apis/address/address";
import { useEffect, useState } from "react";

const Address = () => {
  const { data, getAllAddressReq, isLoading, refetch } = useGetAllAddress();

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

  const handleRefetch = () => {
    refetch();
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

        {isLoading ? (
          <>loading...</>
        ) : data?.addresses?.length === 0 ? (
          <p>no address</p>
        ) : (
          <div className="my-5 grid grid-cols-12 gap-5">
            {data?.addresses?.map((address, i) => (
              <Card key={i} data={address} reFetch={handleRefetch} />
            ))}
          </div>
        )}
      </div>

      <AddressCreate reFetch={handleRefetch} />
    </>
  );
};

export default Address;
