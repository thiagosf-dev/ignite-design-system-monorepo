import { Box, Text, Checkbox, CheckboxProps } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box as={'label'} css={{ display: 'flex', gap: 4 }}>
          {Story()}
          <Text size={'sm'}>Is enable?</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {
  args: {},
}

export const disabled: StoryObj<CheckboxProps> = {
  args: {
    disabled: true,
  },
}
