import React from "react"
import styled, { css } from "styled-components"

export interface AbBotaoProps {
    texto?: string;
    tipo?: 'primario' | 'secundario';
    onClick?: () => void;
    isBlock?: boolean;
}

const BotaoEstilizado = styled.button<AbBotaoProps>`
    background: ${(props: AbBotaoProps) => props.tipo === 'primario' ? '#EB9B00' : "#FFF"};
    padding: 16px 32px;
    border: 2px solid #EB9B00;
    color: ${(props: AbBotaoProps) => props.tipo === 'primario' ? '#FFF' : "#EB9B00"};
    width: ${(props: AbBotaoProps) => props.isBlock ? '100%' : "auto"};
    font-size: 20px;
    cursor: pointer;
    ${(props: AbBotaoProps) => props.tipo === 'primario'
        ? css`
        &:hover {
            background: #B87900;
            border: 2px solid #B87900;
        }
`
        : css`
        &:hover {
            background: #FFF;
            border: 2px solid #B87900;
            color: #B87900;
        }
        `
    }
`

export const AbBotao = ({ texto, tipo = 'primario', onClick, isBlock }: AbBotaoProps) => {
    return (
        <BotaoEstilizado onClick={onClick} tipo={tipo} isBlock={isBlock}>
            {texto}
        </BotaoEstilizado>
    )
}

