import { Link } from "next/link";
const CustomButton = ({
  onClick = () => {},
  isLoading = false,
  customClass,
  buttonText = "Submit",
}) => {
  return (
    <div>
      <button
        onClick={onClick}
        disabled={isLoading}
        className={`${customClass}`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default CustomButton;
