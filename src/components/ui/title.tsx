import { type VariantProps, cva } from "class-variance-authority";
import React from "react";
import type { FC, HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

const titleVariants = cva("font-medium", {
   variants: {
      variant: {
         default: "",
         name: "text-[1.875rem] font-bold",
         section: "font-medium text-[17px]",
      },
   },
   defaultVariants: {
      variant: "default",
   },
});

interface ITitleProps
   extends HTMLAttributes<HTMLHeadingElement>,
      VariantProps<typeof titleVariants> {}

const Title: FC<ITitleProps> = React.forwardRef<HTMLHeadingElement, ITitleProps>(
   ({ className, variant, ...props }, ref) => {
      return <h2 ref={ref} {...props} className={cn(titleVariants({ variant, className }))} />;
   }
);

export default Title;
