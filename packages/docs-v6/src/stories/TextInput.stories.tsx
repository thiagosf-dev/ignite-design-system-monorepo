import { Box, Text, TextInput, TextInputProps } from '@ignite-ui-projects/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/TextInput',
  component: TextInput,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as={'label'}
          css={{ display: 'flex', flexDirection: 'column', gap: 4 }}
        >
          <Text size={'sm'}>Username:</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your text',
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'prefix/',
  },
}

export const disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}
