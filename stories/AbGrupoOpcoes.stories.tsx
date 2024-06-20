import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { AbGrupoOpcoes } from "../src/componentes/AbGrupoOpcoes";

export default {
    title: 'Componentes/AbGrupoOpcoes',
    component: AbGrupoOpcoes
} as ComponentMeta<typeof AbGrupoOpcoes>

const Template: ComponentStory<typeof AbGrupoOpcoes> = () => <AbGrupoOpcoes />

export const Padrao = Template.bind({})

Padrao.args = {}