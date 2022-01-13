export enum MessageTypes {
  CredentialsObtained,
}

const emitMessage = (type: MessageTypes, payload?: object): void => {
  window.parent?.postMessage({
    type,
    payload,
  });
};

export default emitMessage;
