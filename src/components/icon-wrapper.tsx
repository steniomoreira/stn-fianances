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
      color: {
        gray: "text-gray-500 bg-gray-500/10",
        yellow: "text-yellow-500 bg-yellow-500/10",
        lime: "text-lime-500 bg-lime-500/10",
        red: "text-red-500 bg-red-500/10",
      },
    },
    defaultVariants: {
      size: "default",
      color: "gray",
    },
  },
);

interface IconWrapperProps extends VariantProps<typeof iconWrapperVariants> {
  icon: IconName;
}

function IconWrapper({ icon, color, size }: IconWrapperProps) {
  return (
    <div className={cn(iconWrapperVariants({ size, color }))}>
      <DynamicIcon name={icon} size={18} />
    </div>
  );
}

export default IconWrapper;
