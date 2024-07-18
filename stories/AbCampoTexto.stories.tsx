import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbCampoTexto, AbCampoTextoProps } from '../src/componentes/AbCampoTexto'

export default {
  title: 'componentes/AbCampoTexto',
  component: AbCampoTexto,
  argTypes: {
    label: {
        control: 'text'
    }
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof AbCampoTexto>;

const Template: ComponentStory<typeof AbCampoTexto> = (args) => <AbCampoTexto {...args} />;

export const AbCampoTextoComponent = Template.bind({})
AbCampoTextoComponent.args = {
    label: 'Título da label',
} as AbCampoTextoProps