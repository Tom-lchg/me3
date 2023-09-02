import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'
import type { FC, HTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

const TextVariants = cva('text-[#33353D] dark:text-[#AEACAF]', {
   variants: {
      variant: {
         default: '',
         indent: 'indent-4 hyphens-auto text-justify',
         paragraph: 'hyphens-auto text-justify',
         accent: 'font-medium text-black',
      },
   },
   defaultVariants: {
      variant: 'default',
   },
})

interface ITextProps
   extends HTMLAttributes<HTMLParagraphElement>,
      VariantProps<typeof TextVariants> {}

const Text: FC<ITextProps> = React.forwardRef<HTMLParagraphElement, ITextProps>(
   ({ className, variant, ...props }, ref) => {
      return (
         <p
            ref={ref}
            {...props}
            className={cn(TextVariants({ variant, className }))}
         />
      )
   }
)

export default Text
