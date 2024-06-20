import React, { ReactNode, useState } from "react";
import styled from "styled-components";

export interface CardProps {
    children: ReactNode
    texto: string
}

const CardStyled = styled.div`
    background: #FFFFFF;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 48px;
`

export const Card = ({ children, texto }: CardProps) => {
    return(
        <CardStyled>
            {children}
            {texto}
        </CardStyled>
    )
}