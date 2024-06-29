import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';
const meta: Meta<typeof Button> = {
	title: 'Components/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
	args: {
		children: 'Solid',
		variant: 'solid',
	},
};
export const Outline: Story = {
	args: {
		children: 'Outline',
		variant: 'outline',
		size: 'lg',
	},
};
export const Ghost: Story = {
	args: {
		children: 'Ghost',
		variant: 'ghost',
		size: 'lg',
	},
};
