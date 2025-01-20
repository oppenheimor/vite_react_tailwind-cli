/**
 * @name Checkbox
 * @description A control that allows the user to toggle between checked and not checked.
 * @usage <script setup lang="ts">\nimport { Checkbox } from '@/components/ui/checkbox'\n</script>\n\n<template>\n  <Checkbox id=\"terms\" />\n</template>\n
 * @examples [
 *  {
 *    "source": "CheckboxDemo.vue",
 *    "code": "<script setup lang=\"ts\">\nimport { Checkbox } from '@/components/ui/checkbox'\n</script>\n\n<template>\n  <div class=\"flex items-center space-x-2\">\n    <Checkbox id=\"terms\" />\n    <label\n      for=\"terms\"\n      class=\"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70\"\n    >\n      Accept terms and conditions\n    </label>\n  </div>\n</template>"
 *  },
 *  {
 *    "source": "CheckboxDisabled.vue",
 *    "code": "<script setup lang=\"ts\">\nimport { Checkbox } from '@/components/ui/checkbox'\n</script>\n\n<template>\n  <div class=\"items-top flex space-x-2\">\n    <Checkbox id=\"terms1\" disabled />\n    <label\n      for=\"terms2\"\n      class=\"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70\"\n    >\n      Accept terms and conditions\n    </label>\n  </div>\n</template>"
 *  },
 *  {
 *    "source": "CheckboxFormMultiple.vue",
 *    "code": "<script setup lang=\"ts\">\nimport { h } from 'vue'\nimport { useForm } from 'vee-validate'\nimport { toTypedSchema } from '@vee-validate/zod'\nimport * as z from 'zod'\n\nimport { Button } from '@/components/ui/button'\nimport {\n  FormControl,\n  FormDescription,\n  FormField,\n  FormItem,\n  FormLabel,\n  FormMessage,\n} from '@/components/ui/form'\nimport { Checkbox } from '@/components/ui/checkbox'\nimport { toast } from '@/components/ui/toast'\n\nconst items = [\n  {\n    id: 'recents',\n    label: 'Recents',\n  },\n  {\n    id: 'home',\n    label: 'Home',\n  },\n  {\n    id: 'applications',\n    label: 'Applications',\n  },\n  {\n    id: 'desktop',\n    label: 'Desktop',\n  },\n  {\n    id: 'downloads',\n    label: 'Downloads',\n  },\n  {\n    id: 'documents',\n    label: 'Documents',\n  },\n] as const\n\nconst formSchema = toTypedSchema(z.object({\n  items: z.array(z.string()).refine(value => value.some(item => item), {\n    message: 'You have to select at least one item.',\n  }),\n}))\n\nconst { handleSubmit } = useForm({\n  validationSchema: formSchema,\n  initialValues: {\n    items: ['recents', 'home'],\n  },\n})\n\nconst onSubmit = handleSubmit((values) => {\n  toast({\n    title: 'You submitted the following values:',\n    description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))),\n  })\n})\n</script>\n\n<template>\n  <form @submit=\"onSubmit\">\n    <FormField name=\"items\">\n      <FormItem>\n        <div class=\"mb-4\">\n          <FormLabel class=\"text-base\">\n            Sidebar\n          </FormLabel>\n          <FormDescription>\n            Select the items you want to display in the sidebar.\n          </FormDescription>\n        </div>\n\n        <FormField v-for=\"item in items\" v-slot=\"{ value, handleChange }\" :key=\"item.id\" type=\"checkbox\" :value=\"item.id\" :unchecked-value=\"false\" name=\"items\">\n          <FormItem class=\"flex flex-row items-start space-x-3 space-y-0\">\n            <FormControl>\n              <Checkbox\n                :checked=\"value.includes(item.id)\"\n                @update:checked=\"handleChange\"\n              />\n            </FormControl>\n            <FormLabel class=\"font-normal\">\n              {{ item.label }}\n            </FormLabel>\n          </FormItem>\n        </FormField>\n        <FormMessage />\n      </FormItem>\n    </FormField>\n\n    <div class=\"flex justify-start mt-4\">\n      <Button type=\"submit\">\n        Submit\n      </Button>\n    </div>\n  </form>\n</template>"
 *  },
 *  {
 *    "source": "CheckboxFormSingle.vue",
 *    "code": "<script setup lang=\"ts\">\nimport { h } from 'vue'\nimport { useForm } from 'vee-validate'\nimport { toTypedSchema } from '@vee-validate/zod'\nimport * as z from 'zod'\n\nimport { Button } from '@/components/ui/button'\nimport {\n  FormControl,\n  FormDescription,\n  FormField,\n  FormItem,\n  FormLabel,\n  FormMessage,\n} from '@/components/ui/form'\nimport { Checkbox } from '@/components/ui/checkbox'\nimport { toast } from '@/components/ui/toast'\n\nconst formSchema = toTypedSchema(z.object({\n  mobile: z.boolean().default(false).optional(),\n}))\n\nconst { handleSubmit } = useForm({\n  validationSchema: formSchema,\n  initialValues: {\n    mobile: true,\n  },\n})\n\nconst onSubmit = handleSubmit((values) => {\n  toast({\n    title: 'You submitted the following values:',\n    description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))),\n  })\n})\n</script>\n\n<template>\n  <form class=\"space-y-6\" @submit=\"onSubmit\">\n    <FormField v-slot=\"{ value, handleChange }\" type=\"checkbox\" name=\"mobile\">\n      <FormItem class=\"flex flex-row items-start gap-x-3 space-y-0 rounded-md border p-4\">\n        <FormControl>\n          <Checkbox :checked=\"value\" @update:checked=\"handleChange\" />\n        </FormControl>\n        <div class=\"space-y-1 leading-none\">\n          <FormLabel>Use different settings for my mobile devices</FormLabel>\n          <FormDescription>\n            You can manage your mobile notifications in the\n            <a href=\"/examples/forms\">mobile settings</a> page.\n          </FormDescription>\n          <FormMessage />\n        </div>\n      </FormItem>\n    </FormField>\n    <Button type=\"submit\">\n      Submit\n    </Button>\n  </Form>\n</template>"
 *  },
 *  {
 *    "source": "CheckboxWithText.vue",
 *    "code": "<script setup lang=\"ts\">\nimport { Checkbox } from '@/components/ui/checkbox'\n</script>\n\n<template>\n  <div class=\"items-top flex gap-x-2\">\n    <Checkbox id=\"terms1\" />\n    <div class=\"grid gap-1.5 leading-none\">\n      <label\n        for=\"terms1\"\n        class=\"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70\"\n      >\n        Accept terms and conditions\n      </label>\n      <p class=\"text-sm text-muted-foreground\">\n        You agree to our Terms of Service and Privacy Policy.\n      </p>\n    </div>\n  </div>\n</template>"
 *  }
 * ]
 */
import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
