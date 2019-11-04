export class Message {
  type: MessageType;
  message: string;
  scope: string;
}
export enum MessageType {
  Success,
  Error,
  Info,
  Warning
}
