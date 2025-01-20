/**
 * @name Label
 * @description Renders an accessible label associated with controls.
 * @usage <script setup lang="ts">\nimport { Label } from '@/components/ui/label'\n</script>\n\n<template>\n  <Label for="email">Your email address</Label>\n</template>\n
 * @examples [
 *  {
 *    "source": "LabelDemo.vue",
 *    "code": "<script setup lang=\"ts\">\nimport { Checkbox } from '@/components/ui/checkbox'\nimport { Label } from '@/components/ui/label'\n</script>\n\n<template>\n  <div>\n    <div class=\"flex items-center space-x-2\">\n      <Checkbox id=\"terms\" />\n      <Label for=\"terms\">Accept terms and conditions</Label>\n    </div>\n  </div>\n</template>"
 *  }
 * ]
 */
import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
