/* eslint-disable react/prop-types */

const SelectInput = ({
  id,
  label,
  value,
  onChange,
  options,
  error,
  selectExtraClasses,
  labelExtraClasses,
}) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className={`block text-sm font-medium leading-6 text-gray-900 ${labelExtraClasses}`}
        >
          {label}
        </label>
      )}

      <select
        className={`select select-bordered w-full ${
          error && "select-error"
        } ${selectExtraClasses}`}
        value={value}
        onChange={handleChange}
      >
        {options?.map((option, i) => (
          <option key={i} value={option.value} disabled={option.disabled}>
            {option.title}
          </option>
        ))}
      </select>

      {error && (
        <span className="text-error text-sm ms-1 mt-1 font-semibold">
          {error?.msg}
        </span>
      )}
    </div>
  );
};

export default SelectInput;
