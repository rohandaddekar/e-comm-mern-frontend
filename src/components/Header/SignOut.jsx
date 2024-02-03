import useSignOut from "../../apis/signOut/signOut";

const SignOut = () => {
  const { isLoading, signOutReq } = useSignOut();

  return (
    <>
      <li
        onClick={signOutReq}
        className="py-1 px-3 cursor-pointer hover:bg-gray-200 rounded-md"
      >
        {isLoading ? "Signing Out..." : "Sign Out"}
      </li>
    </>
  );
};

export default SignOut;
