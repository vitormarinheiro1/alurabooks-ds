import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Card, CardProps } from "../src/componentes/AbCard";

export default {
    title: 'Componentes/Card',
    component: Card
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args}/>

export const Primario = Template.bind({})
