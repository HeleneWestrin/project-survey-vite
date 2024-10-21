export const RadioButtonGroup = ({
  name,
  options,
  userAnswers,
  updateUserAnswers,
  handleKeyDown,
}) => (
  <fieldset>
    {options.map((option) => (
      <label
        key={option}
        tabIndex="0"
        onKeyDown={(event) => handleKeyDown(event, name, option)}
        aria-checked={userAnswers[name] === option.toLowerCase()}
        role="radio"
      >
        <input
          type="radio"
          name={name}
          value={option.toLowerCase()}
          checked={userAnswers[name] === option.toLowerCase()}
          onChange={(event) => {
            event.target.value = event.target.value.toLowerCase();
            updateUserAnswers(event);
          }}
        />
        {option}
      </label>
    ))}
  </fieldset>
);
