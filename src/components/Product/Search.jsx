import { useState } from "react";
import TextInput from "../Inputs/Text";

const Search = () => {
  const [search, setSearch] = useState("");

  const onChangeHandler = (field, value) => {
    setSearch(value);
  };

  return (
    <>
      <TextInput
        id={"search"}
        type={"text"}
        placeholder={"Laptop"}
        value={search}
        onChange={(value) => onChangeHandler("search", value)}
      />
    </>
  );
};

export default Search;
