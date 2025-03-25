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

  async function actionForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    startTransition(async () => {
      const state = await action(data);

      if (state.type && state.message) {
        alertMessage({ type: state.type, text: state.message });
      }

      if (onSuccess && state.success) {
        onSuccess();
      }

      setFormState(state);
    });
  }

  return [formState, actionForm, isPending] as const;
}
