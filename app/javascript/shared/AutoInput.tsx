import React from "react";
import { Input, Typography } from "antd";

interface AutoInputProps {
  hiddenValue: string;
  label?: string;
}

const AutoInput = ({ hiddenValue, label }: AutoInputProps): JSX.Element => {
  const [show, setShow] = React.useState(false);

  const showValue = () => {
    setShow(true);
  };

  return (
    <Input
      prefix={
        <Typography.Text strong>
          {label ? `${label}:` : undefined}
        </Typography.Text>
      }
      value={show ? hiddenValue : ""}
      onClick={showValue}
      onChange={showValue}
      placeholder="Click/tap here to fill in"
    />
  );
};

export default AutoInput;
