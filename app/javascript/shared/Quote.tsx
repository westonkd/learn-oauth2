import React from "react";
import { Alert, Typography } from "antd";

interface QuoteProps {
  source: string;
  content: JSX.Element;
}

const QuoteProps = ({ source, content }: QuoteProps): JSX.Element => {
  return (
    <Alert
      type="info"
      message={
        <div>
          <div>
            <Typography.Text strong>{source}</Typography.Text>
          </div>
          {content}
        </div>
      }
    />
  );
};

export default QuoteProps;
