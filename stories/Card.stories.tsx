import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Card } from "../src/componentes/Card";

export default {
    title: 'Componentes/Card',
    component: Card
} as ComponentMeta<typeof Card>

export const CardComponent = () => {
    return (
        <Card>
            <h1>Olá, eu sou um Card!</h1>
        </Card>
    )
}