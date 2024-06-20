import React from "react";
import styled from "styled-components";

const SectionEstilizada = styled.section<{ selecionado: boolean }>`
    width: 194px;
    height: 88px;
    background-color: #FFFFFF;
    border: 1px solid;
    border-color: #EB9B00;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    margin: 10px;
    font-family: sans-serif;
    header {
        color: #EB9B00;
        font-size: 12px;
        font-weight: 400;
    }
    strong {
        color: #EB9B00;
        font-weight: 700;
        font-size: 16px;
    }
    footer {
        color: rgba(0, 0, 0, 0.54);
        font-weight: 400;
        font-size: 12px;
    }
`

export const AbGrupoOpcoes = () => {
    return (
        <SectionEstilizada selecionado={false}>
            <header>
                E-book
            </header>
            <div>
                <strong>R$ 00,00</strong>
            </div>
            <footer>
                .pdf, .epub, .mob
            </footer>
        </SectionEstilizada>
    )
}