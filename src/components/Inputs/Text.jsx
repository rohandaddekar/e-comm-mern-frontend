/* eslint-disable react/prop-types */

const TextInput = ({
  id,
  type,
  label,
  placeholder,
  value,
  onChange,
  error,
  disabled,
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
        type={type}
        placeholder={placeholder}
        className={`input input-bordered w-full ${
          error && "input-error"
        } ${inputExtraClasses}`}
        value={value}
        onChange={handleChange}
        disabled={disabled}
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
