import { FaUserEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useDeleteUser, useGetAllUsers } from "../../../apis/user/user";
import { useEffect, useState } from "react";
import UserEdit from "../../../components/modals/UserEdit";
import DeleteAlert from "../../../components/modals/DeleteAlert";

const User = () => {
  const { data, isLoading, getAllUsersReq, refetchAllUsers } = useGetAllUsers();
  const {
    data: deleteData,
    isLoading: deleteIsLoading,
    deleteUserReq,
  } = useDeleteUser();

  const [selectedEditUserId, setSelectedEditUserId] = useState(null);
  const [selectedDeleteUserId, setSelectedDeleteUserId] = useState(null);

  useEffect(() => {
    getAllUsersReq();
  }, []);

  const modalHandler = (modalName, id) => {
    if (modalName === "userEditModal") {
      setSelectedEditUserId(id);
    } else if (modalName === "deleteAlertModal") {
      setSelectedDeleteUserId(id);
    }

    document.getElementById(modalName).showModal();
  };

  const handleRefetch = () => {
    refetchAllUsers();
  };

  return (
    <>
      <div>
        <h2 className="text-2xl font-bold mb-4">User</h2>

        {isLoading ? (
          <>loading...</>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Created At</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.users?.length === 0 ? (
                    <tr>
                      <td>no users</td>
                    </tr>
                  ) : (
                    data?.users?.map((user, i) => (
                      <tr key={i}>
                        <td>
                          <div className="flex items-center gap-3">
                            <div className="avatar border-2 rounded-full">
                              <div className="mask mask-squircle w-12 h-12">
                                <img
                                  src={user?.profileImg}
                                  alt={user?.firstName}
                                />
                              </div>
                            </div>
                            <div>
                              <p className="font-bold">
                                {user?.firstName} {user?.lastName}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>{user?.email}</td>
                        <td>{user?.role}</td>
                        <td>{user?.createdAt}</td>
                        <th>
                          <button
                            className="btn btn-ghost"
                            onClick={() =>
                              modalHandler("userEditModal", user?._id)
                            }
                          >
                            <FaUserEdit size={20} />
                          </button>
                          <button
                            className="btn btn-ghost"
                            onClick={() =>
                              modalHandler("deleteAlertModal", user?._id)
                            }
                          >
                            <RiDeleteBin6Fill size={20} />
                          </button>
                        </th>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            <UserEdit
              selectedUserId={selectedEditUserId}
              setSelectedUserId={setSelectedEditUserId}
              reFetchAllUsers={handleRefetch}
            />

            <DeleteAlert
              data={deleteData}
              isLoading={deleteIsLoading}
              deleteReq={deleteUserReq}
              selectedId={selectedDeleteUserId}
              setSelectedId={setSelectedDeleteUserId}
              reFetch={handleRefetch}
            />
          </>
        )}
      </div>
    </>
  );
};

export default User;
