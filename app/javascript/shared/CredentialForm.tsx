import React from "react";
import {
  Form,
  message,
  Button,
  Space,
  Typography,
  Statistic,
  Alert,
} from "antd";

import AutoInput from "./AutoInput";
import SoundStream from "./SoundStream";
import emitMessage, { MessageTypes } from "./emitMessage";

interface CredentialFormProps {
  redirectUri: string;
  secret: string;
  clientId: string;
}

const CredentialForm = ({
  redirectUri,
  secret,
  clientId,
}: CredentialFormProps): JSX.Element => {
  const [form] = Form.useForm();
  const [complete, setComplete] = React.useState(false);

  const onFinish = () => {
    message.success("Registration Complete");
    setComplete(true);
    emitMessage(MessageTypes.CredentialsObtained, { secret });
  };

  return (
    <SoundStream>
      <div className="border p-5">
        {complete ? (
          <>
            <Typography.Title level={2}>
              Application Information
            </Typography.Title>
            <Statistic title="Client ID" value={clientId} />
            <Statistic title="Secret" value={secret} />
            <Alert message="Remember to keep your secret safe" type="warning" />
          </>
        ) : (
          <>
            <Typography.Title level={2}>
              Please register your application
            </Typography.Title>
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item label="Application Name" rules={[{ required: true }]}>
                <AutoInput hiddenValue="Song Stats" />
              </Form.Item>
              <Form.Item label="Email Address" rules={[{ required: true }]}>
                <AutoInput hiddenValue="youremail@test.com" />
              </Form.Item>
              <Form.Item label="Redirect URI" rules={[{ required: true }]}>
                <AutoInput hiddenValue={redirectUri} />
              </Form.Item>
              <Form.Item>
                <Space>
                  <Button ghost shape="round" type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Space>
              </Form.Item>
            </Form>
          </>
        )}
      </div>
    </SoundStream>
  );
};

export default CredentialForm;
