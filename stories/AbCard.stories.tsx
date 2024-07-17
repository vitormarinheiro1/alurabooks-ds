import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AbCard, AbCardProps } from "../src/componentes/AbCard";

export default {
    title: 'componentes/AbCard',
    component: AbCard,
  } as ComponentMeta<typeof AbCard>;
  
  export const AbCardComponent = () => {
      return (<AbCard>
          <h1>Olá, eu sou um Card</h1>
      </AbCard>)
  }