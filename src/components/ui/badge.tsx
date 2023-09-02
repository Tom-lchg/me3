import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const badgeVariants = cva(
   "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 prose",
   {
      variants: {
         variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary:
               "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive:
               "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground",
         },
         colorScheme: {
            default: "",
            teal: "dark:bg-[#152523] bg-[#b2f5ea] text-[#4d7e7e] dark:text-[#75d2c6]",
            blue: "dark:bg-[#172127] bg-[#bee3f8] text-[#415c7c] dark:text-[#78accc]",
            black: "dark:bg-[#000] bg-[#f5f5f5] text-[#000] dark:text-[#fff]",
            green: "dark:bg-[#19251d] bg-[#c6f6d5] text-[#4c7e64] dark:text-[#92d9aa]",
            purple: "dark:bg-[#221e28] bg-[#e9d8fd] text-[#675696] dark:text-[#cbb3ed]",
            grey: "dark:bg-[#152523] bg-[#b2f5ea] text-[#4d7e7e] dark:text-[#75d2c6]",
         },
      },
      defaultVariants: {
         variant: "default",
         colorScheme: "default",
      },
   }
);

export interface BadgeProps
   extends React.HTMLAttributes<HTMLDivElement>,
      VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, colorScheme, ...props }: BadgeProps) {
   return <div className={cn(badgeVariants({ variant, colorScheme }), className)} {...props} />;
}

export { Badge, badgeVariants };
