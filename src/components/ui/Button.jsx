import "./button.css";

export const Button = ({ onClick, text, disabled }) => {
  return (
    <button aria-disabled={disabled ? true : false} onClick={onClick}>
      {text}
    </button>
  );
};
