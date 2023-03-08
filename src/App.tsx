import { FormEvent, useState } from 'react';
import { UserAddres } from './components/UserAddress';
import { UserForm } from './components/UserForm';
import { UserQuestions } from './components/UserQuestion';
import { UserSkills } from './components/UserSkill';
import { useStepForm } from './hooks/useStepForm';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  poscode: string;
  address: string;
  city: string;
  country: string;
  jsInYears:  string;
  tsInYears:  string;
  totalExperience:  string;
  question: string;
}

const INITIAL_DATA: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  poscode: '',
  address: '',
  city: '',
  country: '',
  jsInYears: '',
  tsInYears: '',
  totalExperience: '',
  question: '',
};

function App() {
  const [data, setData] = useState(INITIAL_DATA)

  function onChangeField(val: Partial<FormData>) {
    setData(prev => {
      return {...prev, ...val}
    })
  }

  const {
    steps,
    stepIndex,
    step,
    isFirstStep,
    isLastStep,
    backStep,
    nextStep,
    goToFirs,
  } = useStepForm([
    <UserForm {...data} onChangeField={onChangeField} />,
    <UserAddres {...data} onChangeField={onChangeField} />,
    <UserSkills {...data} onChangeField={onChangeField} />,
    <UserQuestions {...data} onChangeField={onChangeField} />,
  ]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return nextStep();
    alert(JSON.stringify(data, undefined, 2))
    setData(INITIAL_DATA)
    goToFirs()
  }

  return (
    <div className="w-[80vh] border border-white/40 h-[90vh] my-10 p-5">
      <div className="flex justify-between">
        <h1>HELLO</h1>
        <div>
          {stepIndex + 1}/{steps.length}
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="relative flex justify-end gap-2 pt-3 -mb-12">
          {isFirstStep && (
            <button
              type="button"
              onClick={backStep}
              className="hover:bg-zinc-600 p-2 border border-white/40"
            >
              Back
            </button>
          )}
          <button
            type="submit"
            className="hover:bg-zinc-600 p-2 border border-white/40"
          >
            {isLastStep ? 'Finish' : 'Next'}
          </button>
        </div>
        {step}
      </form>
    </div>
  );
}

export default App;
