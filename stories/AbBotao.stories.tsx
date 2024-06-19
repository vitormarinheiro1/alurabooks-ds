import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { AbBotao } from "../src/componentes/AbBotao";

export default {
    title: 'Componentes/AbBotao',
    component: AbBotao
} as ComponentMeta<typeof AbBotao>

const Template: ComponentStory<typeof AbBotao> = () => <AbBotao />

export const Primario = Template.bind({})