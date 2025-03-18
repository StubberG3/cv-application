import About from './About'
import Education from './Education'
import Work from './Work'
import Button from '../../components/Button'
import { useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useFormStatus } from 'react-dom'

export default function Form() {
  const [submitted, setSubmitted] = useState(false);
  const { pending } = useFormStatus();

  function handleSubmit(event) {
    event.preventDefault();
    const target = event.target;
    const formData = new FormData(target);
    const inputs = Object.fromEntries(formData);

    console.log(inputs);
    alert(`Your Submission: ${inputs.first_name}`);

    // ${Object.entries(formData).map((input, value) =>
    //   <li key={index}>{input} : {value.toString()}</li>
    // )}

    setSubmitted(!submitted);
  }

  function SubmitSuccess() {
    return (
      <aside className="text-center">
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Form Submitted!</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">Your form has been submitted successfully.</p>
          <Button text="Restart" onClick={() => setSubmitted(false)} />
        </div>
      </aside>
    )
  }

  if (submitted) {
    return <SubmitSuccess />
  }

  return (
    <ErrorBoundary
      fallback={<p>There was an error while submitting the form</p>}
    >
      <form autoComplete="true" onSubmit={handleSubmit}>
        <h6 className="text-center">My Resume</h6>
        <About />
        <Education />
        <Work />
        <div className="grid gap-6 py-4 mb-6 md:grid-cols-2">
          <Button id="submit" type="submit" disabled={pending} text={pending ? "Submitting..." : (submitted ? "Edit" : "Submit")} />
          <Button id="clear" type="reset" text="Clear" />
        </div>
      </form>
    </ErrorBoundary>
  )
}