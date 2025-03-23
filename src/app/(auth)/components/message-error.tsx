function MessageError({ text }: { text: string[] }) {
  return <p className="text-xs text-red-500">{text}</p>;
}

export default MessageError;
