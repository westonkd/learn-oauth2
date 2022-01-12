import { StepProps } from "./Step";

const ObtainCredStep = ({ advance, back }: StepProps): JSX.Element => {
  return (
    <div>
      <h2>Obtain Credentials from Authorization Server</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque sapiente
        officia omnis tempora, officiis dolore dicta eius. Atque tempora modi
        ullam nulla a tempore libero aliquam, quod sed praesentium quae.
      </p>
      <div>
        <button onClick={back}>Back</button>&nbsp;
        <button onClick={advance}>Next</button>
      </div>
    </div>
  );
};

export default ObtainCredStep;
