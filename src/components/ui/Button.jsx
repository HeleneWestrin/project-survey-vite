import "./button.css";

export const Button = ({ onClick, text, disabled, onDisabledClick }) => {
  const handleClick = (event) => {
    // If the button is disabled, prevent the default action and call the onDisabledClick function
    if (disabled) {
      event.preventDefault();
      if (onDisabledClick) {
        onDisabledClick(); // Trigger custom function if provided
      }
    } else if (onClick) {
      onClick(event); // Normal onClick behavior when not disabled
    }
  };
  return (
    <button aria-disabled={disabled ? true : false} onClick={handleClick}>
      {text}
    </button>
  );
};
