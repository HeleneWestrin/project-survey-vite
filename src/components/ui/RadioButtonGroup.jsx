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
        onKeyDown={(e) => handleKeyDown(e, name, option)}
        aria-checked={userAnswers[name] === option}
        role="radio"
      >
        <input
          type="radio"
          name={name}
          value={option.toLowerCase()}
          checked={userAnswers[name] === option.toLowerCase()}
          onChange={(e) => {
            e.target.value = e.target.value.toLowerCase();
            updateUserAnswers(e);
          }}
        />
        {option}
      </label>
    ))}
  </fieldset>
);
