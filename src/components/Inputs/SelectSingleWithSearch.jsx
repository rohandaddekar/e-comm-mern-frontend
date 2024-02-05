/* eslint-disable react/prop-types */

import Select from "react-select";

const SelectSingleWithSearch = ({
  label,
  isLoading,
  options,
  value,
  onChange,
  error,
}) => {
  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderColor: error && "#e53e3e",
    }),
  };

  return (
    <>
      <div>
        {label && (
          <span className="text-sm font-medium leading-6 text-gray-900">
            {label}
          </span>
        )}

        {isLoading ? (
          <>loading...</>
        ) : (
          <Select
            options={options}
            value={value}
            onChange={onChange}
            styles={customStyles}
          />
        )}

        {error && (
          <span className="text-error text-sm ms-1 mt-1 font-semibold">
            {error?.msg}
          </span>
        )}
      </div>
    </>
  );
};

export default SelectSingleWithSearch;
