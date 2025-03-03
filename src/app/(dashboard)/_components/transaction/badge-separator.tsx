import { cva, type VariantProps } from "class-variance-authority";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const badgeVariants = cva("-mt-2 w-fit rounded-full px-2 text-xs", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground",
      expense: "bg-destructive text-destructive-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface BadgeSeparatorProps
  extends VariantProps<typeof badgeVariants> {
  text: string;
}

function BadgeSeparator({ variant, text }: BadgeSeparatorProps) {
  return (
    <div className="py-2">
      <Separator />
      <div className={cn(badgeVariants({ variant }))}>{text}</div>
    </div>
  );
}

export default BadgeSeparator;
