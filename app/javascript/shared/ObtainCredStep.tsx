import { StepProps } from "./Step";
import { Typography, Alert } from "antd";
import { Collapse } from "antd";

import Browser from "./Browser";
import Quote from "./Quote";

const { Panel } = Collapse;

const ObtainCredStep = ({ advance, back }: StepProps): JSX.Element => {
  return (
    <div className="flex flex-col py-5 sm:flex-row">
      <div className="sm:max-w-s sm:pr-5 pb-5">
        <Collapse defaultActiveKey={["1"]}>
          <Panel header="Learn" key="1">
            <Typography.Title level={2} style={{ fontSize: "24px" }}>
              Register your app
            </Typography.Title>
            <Typography.Paragraph>
              Before we can get a users's data from Sound Stream, we need to let
              Sound Stream about our app. This process is called "registration."
            </Typography.Paragraph>
            <Typography.Paragraph>
              After we give Sound Stream details about our app, Sound Stream
              will issue us two important vaues: a{" "}
              <Typography.Text strong>Client ID</Typography.Text> and a{" "}
              <Typography.Text strong>Secret</Typography.Text>.
            </Typography.Paragraph>
            <Typography.Paragraph>
              <Quote
                source="From the Specs - Client ID"
                content={
                  <>
                    <Typography.Paragraph>
                      "A unique string representing the registration information
                      provided by the client. The client identifier is not a
                      secret."
                    </Typography.Paragraph>
                  </>
                }
              />
            </Typography.Paragraph>
            <Typography.Paragraph>
              The <Typography.Text strong>Client ID</Typography.Text> is just
              the identifier Sound Stream will use for our app.
            </Typography.Paragraph>
            <Typography.Paragraph>
              The <Typography.Text strong>Secret</Typography.Text>, on the other
              hand, is critical to keep private. It's used to prove to Sound
              Stream that our app is who it says it is.
            </Typography.Paragraph>
          </Panel>
          <Panel header="Apply" key="2">
            <Typography.Title level={2} style={{ fontSize: "24px" }}>
              Instructions
            </Typography.Title>
            <Typography.Paragraph>
              <ol>
                <li>
                  Fill out the registration from on Sound Stream by clicking on
                  each text input.
                </li>
              </ol>
            </Typography.Paragraph>
          </Panel>
        </Collapse>
      </div>
      <div className="flex-none sm:w-4/6">
        <Browser url="https://www.instructure.com" />
      </div>
    </div>
  );
};

export default ObtainCredStep;
