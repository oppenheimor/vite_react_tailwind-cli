/**
 * @name RadioGroup
 * @description A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.
 * @usage <script setup lang="ts">\nimport { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'\n</script>\n\n<template>\n  <RadioGroup default-value=\"option-one\">\n    <RadioGroupItem id=\"option-one\" value=\"option-one\" />\n    <RadioGroupItem id=\"option-two\" value=\"option-two\" />\n  </RadioGroup>\n</template>\n
 * @examples [
 *  {
 *    "source": "RadioGroupDemo.vue",
 *    "code": "<script setup lang=\"ts\">\nimport { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'\n</script>\n\n<template>\n  <RadioGroup default-value=\"comfortable\">\n    <div class=\"flex items-center space-x-2\">\n      <RadioGroupItem id=\"r1\" value=\"default\" />\n      <Label for=\"r1\">Default</Label>\n    </div>\n    <div class=\"flex items-center space-x-2\">\n      <RadioGroupItem id=\"r2\" value=\"comfortable\" />\n      <Label for=\"r2\">Comfortable</Label>\n    </div>\n    <div class=\"flex items-center space-x-2\">\n      <RadioGroupItem id=\"r3\" value=\"compact\" />\n      <Label for=\"r3\">Compact</Label>\n    </div>\n  </RadioGroup>\n</template>"
 *  },
 *  {
 *    "source": "RadioGroupForm.vue",
 *    "code": "<script setup lang=\"ts\">\nimport { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'\n</script>\n\n<template>\n  <RadioGroup default-value=\"comfortable\">\n    <div class=\"flex items-center space-x-2\">\n      <RadioGroupItem id=\"r1\" value=\"default\" />\n      <Label for=\"r1\">Default</Label>\n    </div>\n    <div class=\"flex items-center space-x-2\">\n      <RadioGroupItem id=\"r2\" value=\"comfortable\" />\n      <Label for=\"r2\">Comfortable</Label>\n    </div>\n    <div class=\"flex items-center space-x-2\">\n      <RadioGroupItem id=\"r3\" value=\"compact\" />\n      <Label for=\"r3\">Compact</Label>\n    </div>\n  </RadioGroup>\n</template>"
 *  }
 * ]
 */
import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }
