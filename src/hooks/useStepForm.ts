import { ReactElement, useState } from "react";

export function useStepForm(steps: ReactElement[]) {
  const [stepIndex, setStepIndex] = useState(0);

  function nextStep() {
    setStepIndex(i => {
      if (i >= steps.length - 1) return i;
      return i + 1
    })
  }

  function backStep() {
    setStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }

  function goToStep(i: number) {
    setStepIndex(i)
  }
  function goToFirs() {
    setStepIndex(0)
  }

  return {
    stepIndex,
    step: steps[stepIndex],
    steps,
    isFirstStep: stepIndex !== 0,
    isLastStep: stepIndex === steps.length - 1,
    goToFirs,
    goToStep,
    nextStep,
    backStep
  }
}
