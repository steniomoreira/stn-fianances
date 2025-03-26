import { FormEvent, useState, useTransition } from "react";

import { FormState } from "@/types/form-state-types";

import { useAlertMessage } from "./use-alert-message";

export function useFormState(
  action: (data: FormData) => Promise<FormState>,
  onSuccess?: () => Promise<void> | void,
  initialState?: FormState,
) {
  const [isPending, startTransition] = useTransition();

  const { alertMessage } = useAlertMessage();

  const [formState, setFormState] = useState<FormState>(
    initialState ?? {
      success: false,
      message: null,
      errors: null,
      type: null,
    },
  );

  async function formAction(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    startTransition(async () => {
      const state = await action(data);

      setFormState(state);

      if (state.type && state.message) {
        alertMessage({ type: state.type, text: state.message });
      }

      if (onSuccess && state.success) {
        onSuccess();
      }
    });
  }

  return [formState, formAction, isPending] as const;
}
