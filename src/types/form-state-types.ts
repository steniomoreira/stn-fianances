export type MessageType = "success" | "error" | "info" | "warning";

export interface FormState {
  success: boolean;
  message: string | null;
  errors: Record<string, string[]> | null;
  type: MessageType | null;
}
