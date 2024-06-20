import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { AbGrupoOpcoes, AbGrupoOpcoesProps } from "../src/componentes/AbGrupoOpcoes";

export default {
    title: 'Componentes/AbGrupoOpcoes',
    component: AbGrupoOpcoes
} as ComponentMeta<typeof AbGrupoOpcoes>

const Template: ComponentStory<typeof AbGrupoOpcoes> = (args) => <AbGrupoOpcoes {...args} />

export const Padrao = Template.bind({})

Padrao.args = {
    opcoes: [
        {
        id: 1,
        titulo: 'E-book',
        corpo: 'R$ 29,90',
        rodape: '.pdf, .epub, .mob'
    },
        {
        id: 2,
        titulo: 'Impresso',
        corpo: 'R$ 69,90',
        rodape: '.pdf, .epub, .mob'
    },
        {
        id: 3,
        titulo: 'Impresso + E-book',
        corpo: 'R$ 89,90',
        rodape: '.pdf, .epub, .mob'
    }
    ]
} as AbGrupoOpcoesProps