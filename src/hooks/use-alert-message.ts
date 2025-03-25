import { toast } from "sonner";

import { MessageType } from "@/types/form-state-types";

interface AlertMessage {
  type: MessageType;
  text: string;
}

export function useAlertMessage() {
  function alertMessage({ type, text }: AlertMessage) {
    toast[type](text);
  }

  return { alertMessage };
}
