export default interface Step {
  id: string;
  title: string;
  component: React.FunctionComponent;
}

export interface StepProps {
  advance: () => void;
  back: () => void;
}
