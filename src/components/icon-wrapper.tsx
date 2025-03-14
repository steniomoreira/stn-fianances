import { cva, VariantProps } from "class-variance-authority";
import { DynamicIcon, IconName } from "lucide-react/dynamic";

import { cn } from "@/lib/utils";

const iconWrapperVariants = cva(
  "flex items-center justify-center rounded-sm p-1",
  {
    variants: {
      size: {
        default: "h-8 w-8",
        sm: "h-6 w-6",
        lg: "h-10 w-10",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

interface IconWrapperProps extends VariantProps<typeof iconWrapperVariants> {
  icon: IconName;
  color: string;
}

function IconWrapper({ icon, color, size }: IconWrapperProps) {
  return (
    <div className={cn(iconWrapperVariants({ size }), `bg-${color}-500/10`)}>
      <DynamicIcon name={icon} size={18} className={`text-${color}-500`} />
    </div>
  );
}

export default IconWrapper;
