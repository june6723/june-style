import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import Input from "./Input";

const meta: ComponentMeta<typeof Input> = {
  title: "June Style/Input",
  component: Input,
};
export default meta;

export const Base: ComponentStoryObj<typeof Input> = {
  args: {
    disabled: false,
  },
};
