import { FormEvent, useState, useTransition } from "react";
import { toast } from "sonner";

interface FormState {
  success: boolean;
  message: string | null;
  errors: Record<string, string[]> | null;
}

export function useFormState(
  action: (data: FormData) => Promise<FormState>,
  onSuccess?: () => Promise<void> | void,
  initialState?: FormState,
) {
  const [isPending, startTransition] = useTransition();

  const [formState, setFormState] = useState<FormState>(
    initialState ?? {
      success: false,
      message: null,
      errors: null,
    },
  );

  function alertMessage(message: string) {
    if (message) {
      toast.error(message);
    }
  }

  async function actionForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    startTransition(async () => {
      const state = await action(data);

      if (onSuccess && state.success) {
        onSuccess();
      }

      if (state.message) {
        alertMessage(state.message);
      }

      setFormState(state);
    });
  }

  return [formState, actionForm, isPending] as const;
}
