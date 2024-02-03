/* eslint-disable react/prop-types */

const Button = ({ title, type, outline, extraClasses, isLoading }) => {
  return (
    <button
      type={type || "button"}
      className={`btn btn-primary w-full ${
        outline && "btn-outline"
      } ${extraClasses}`}
    >
      {title}
      {isLoading && <span className="loading loading-spinner"></span>}
    </button>
  );
};

export default Button;
