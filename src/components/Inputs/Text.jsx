/* eslint-disable react/prop-types */

const TextInput = ({
  id,
  min,
  max,
  type,
  label,
  error,
  value,
  disabled,
  onChange,
  placeholder,
  inputExtraClasses,
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
      <input
        id={id}
        min={min}
        max={max}
        type={type}
        value={value}
        disabled={disabled}
        onChange={handleChange}
        placeholder={placeholder}
        className={`input input-bordered rounded-[4px] py-4 w-full ${
          error && "input-error"
        } ${inputExtraClasses}`}
      />
      {error && (
        <span className="text-error text-sm ms-1 mt-1 font-semibold">
          {error?.msg}
        </span>
      )}
    </div>
  );
};

export default TextInput;
