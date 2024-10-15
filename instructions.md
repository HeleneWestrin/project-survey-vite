# Instructions

This week, we will practice React state and controlled forms by making a quiz or a survey. Your completed project should consist of at least three questions that users need to answer. When the user presses submit, they should see a summary of their answers.

## Context:

You can choose what you'd like your survey to be about. Perhaps you want to do a Buzzfeed-style quiz on "What character are you from the series Stranger Things?" or maybe you'd like to survey people about their favourite hobbies or what other developers think about different technologies. It's entirely up to you.

Once a user has “submitted” the answers, they should see a summary. It doesn't actually need to be submitted anywhere - the focus here is to practice using React state and controlling forms.

You don't have to use a lot of components to start with when doing this project. See that as more of a stretch goal…

## Design

How you design your page is up to you, but take accessibility into account when you are styling your form elements - so inputs should have labels and should be easily readable and usable. We STRONGLY recommend having some kind of design or sketch before starting to code.

## How to get started

1. **Person A** forks the repo
2. **Person A** invites person B as a collaborator to the repo (Settings -> Collaborators and teams -> Add people)
3. **Person A** clones the repo
4. **Both of you** lay out the foundation together by pair programming using Live Share
5. When it's time to split up, **person B** also needs to clone the repo.
6. Work on different features (for example, different quiz questions) in different branches
7. When you're done with a feature, it's time to merge! You choose if you want to work with PRs and code reviews or if you want to do this more verbally before you merge.

## Requirements:

- Your app should consist of at least 3 questions.
- At least one question should use radio buttons.
- At least one question should use a select dropdown.
- There should be a submit button. When pressed, your app should hide the input form and show a summary of the user's submissions.
- Your project should be following accessibility guidelines to ensure your website is usable by a diverse range of users:
  - You should have a score of at least 95 in [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview)
  - You should use semantic HTML elements
  - All images should have alt attributes and proper sizes
  - All contrasts should be OK
- Follow the guidelines on how to write clean code
- Make your app responsive (it should look good on devices from 320px width up to 1600px)

## Stretch goals

So you’ve completed the requirements? Great job! Ensure you've committed and pushed a version of your project before starting on the stretch goals. Remember that the stretch goals are optional.

### Intermediate Stretch Goals

- Use a form element you haven't tried before (such as a [range slider](https://www.w3schools.com/howto/howto_js_rangeslider.asp)) and connect it to React state. You can find a list of input types [here](https://www.w3schools.com/html/html_form_input_types.asp).
- Add validation to your survey! Use either HTML input validation attributes (such as `required`) or implement custom logic when the user clicks the submit button to make the form fields have validations. If you choose to implement your own validation, you should also make sure to show error messages in a nice way.
- Create a button that, when clicked, will scroll down to the top of the next question in the survey (if possible)

### Advanced Stretch Goals

- Visualize to the user how far through the survey they are and how much is left by creating a progress bar
- Use Regex validation for some input on your survey
- Show different questions depending on the answer to a specific question
- Create a multi-step form. Example 👇
  Show each question on its own 'page' with a continue button to progress to the next question (like how typeform does it). If you decide to split your form into sections, then one approach you could take is to try to think of these sections as a single `useState` hook which you can use to conditionally render different groups of inputs. For example, you could have some state like `const [section, setSection] = useState('firstQuestion')` and then when the user presses a button to progress, you'd use the `setSection()` function to progress them to the second question, etc. Then, in your JSX, you could conditionally render, like this:

  ```
  const Example = () => {
    const [section, setSection] = useState('firstQuestion')

    return (
      <div>
        {section === 'firstQuestion' && (
          <div>
            First question...
          </div>
        )}

        {section === 'secondQuestion' && (
          <div>
            Second question...
          </div>
        )}
      </div>
    )
  }
  ```

  As always, there are many ways to approach this! This is just one suggestion.
