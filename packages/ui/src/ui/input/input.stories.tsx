import type { Meta, StoryObj } from '@storybook/react';

import { getWrapperDecorator } from '../../stories';
import { Input } from '.';

const meta = {
  title: 'UI/Input',
  component: Input,
  decorators: [getWrapperDecorator()],
  args: {
    placeholder: 'Search',
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithSize: Story = {
  args: {
    size: 'small',
  },
};
