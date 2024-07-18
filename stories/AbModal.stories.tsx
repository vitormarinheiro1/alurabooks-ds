import React from "react";
import { AbModal, AbModalProps } from '../src/componentes/AbModal'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
    title: 'Componentes/AbModal',
    component: AbModal
} as ComponentMeta<typeof AbModal>

const Template: ComponentStory<typeof AbModal> = (args) => <AbModal {...args}/>

export const Primario = Template.bind({})

Primario.args = {
    aberta: true,
    titulo: 'Titulo da Modal',
    children: <h1>Um Modal</h1>
} as AbModalProps