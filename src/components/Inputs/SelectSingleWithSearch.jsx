/* eslint-disable react/prop-types */

import Select from "react-select";

const SelectSingleWithSearch = ({
  error,
  value,
  label,
  options,
  onChange,
  isLoading,
  labelExtraClasses,
  selectExtraClasses,
}) => {
  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderColor: error && "#e53e3e",
      ...selectExtraClasses,
    }),
  };

  return (
    <>
      <div>
        {label && (
          <span
            className={`text-sm font-medium leading-6 text-gray-900 ${labelExtraClasses}`}
          >
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
