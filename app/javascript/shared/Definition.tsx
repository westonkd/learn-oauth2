import React from "react";
import { Typography, Popover, Button } from "antd";

export enum Terms {
  ClientId,
}

interface DefinitionProps {
  term: Terms;
}

interface Definition {}

const definitions = {
  [Terms.ClientId]: {
    definition: (
      <Typography.Paragraph>
        The primary identifier the{" "}
        <Typography.Text strong>Authorization Server</Typography.Text> (Sound
        Stream) uses to identify the{" "}
        <Typography.Text strong>Client</Typography.Text> (Song Insights). The
        client identifier is not a secret.
      </Typography.Paragraph>
    ),
    source: "https://datatracker.ietf.org/doc/html/rfc6749#section-2.2",
    term: "Client ID",
  },
};

const Definition = ({ term }: DefinitionProps): JSX.Element => {
  const termObject = definitions[term];

  return (
    <Popover
      content={
        <>
          {termObject.definition}
          <Typography.Paragraph>
            <Typography.Text strong>Source:</Typography.Text>{" "}
            <Typography.Link href={termObject.source}>
              {termObject.source.split("#")[0]}
            </Typography.Link>
          </Typography.Paragraph>
        </>
      }
      title={`${termObject.term} Definition`}
      trigger="click"
    >
      <Button type="text" style={{ padding: "0px", margin: "0px" }}>
        <Typography.Text strong underline>
          {termObject.term}
        </Typography.Text>
      </Button>
    </Popover>
  );
};

export default Definition;
