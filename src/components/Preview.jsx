/*
Preview组件是一个用于展示和调试其他React组件的容器组件，主要用于开发阶段的组件预览和测试。该组件集成了DemoComponent、Button、RadioGroup、Checkbox等组件的展示。
*/
import React from 'react';
// 调试组件
import DemoComponent from './DemoComponent';
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Checkbox } from "@/components/ui/checkbox"

const Section = ({ title, children }) => {
  return (
    <div className="p-4">
      <div className="text-2xl font-bold tracking-tight font-sans my-2">{title}</div>
      {children}
    </div>
  );
};

export default function Preview() {
  return (
    <div>
      <Section title="Custom Demo Component">
        <DemoComponent />
      </Section>

      <Section title="Button">
        <Button>Click me!</Button>
      </Section>

      <Section title="Radio Group">
        <RadioGroup defaultValue="comfortable">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1">Default</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2">Comfortable</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="compact" id="r3" />
            <Label htmlFor="r3">Compact</Label>
          </div>
        </RadioGroup>
      </Section>

      <Section title="Checkbox">
        <div className="items-top flex space-x-2">
          <Checkbox id="terms1" />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms1"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Accept terms and conditions
            </label>
            <p className="text-sm text-muted-foreground">
              You agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
