import { useState } from "react";
import { Typography } from "antd";
import { Steps as AntSteps } from "antd";

import Step from "./Step";

interface StepProps {
  steps: Array<Step>;
  title: string;
}

const Steps = ({ steps, title }: StepProps): JSX.Element => {
  const [currentStep, setCurrentStep] = useState(0);
  const currentStepObject = (): Step | undefined => steps?.at(currentStep);
  const CurrentStepComponent = currentStepObject()?.component;

  const advance = () =>
    currentStep < steps.length - 1 && setCurrentStep((cs) => cs + 1);
  const back = () => currentStep > 0 && setCurrentStep((cs) => cs - 1);

  return (
    <div className="grid grid-flow-row auto-rows-max">
      <div>
        <Typography.Title>{title}</Typography.Title>
      </div>
      <div>
        <AntSteps current={currentStep}>
          {steps?.map((step) => {
            return <AntSteps.Step title={step.title} key={step.id} />;
          })}
        </AntSteps>
      </div>
      <div>
        {CurrentStepComponent && (
          <CurrentStepComponent advance={advance} back={back} />
        )}
      </div>
    </div>
  );
};

export default Steps;
