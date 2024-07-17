import React, { ReactNode } from "react";
import styled from "styled-components";

export interface AbCardProps {
    children: ReactNode
}

const AbCardStyled = styled.div`
    background: #FFFFFF;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 48px;
`

export const AbCard = ({ children }: AbCardProps) => {
    return(
        <AbCardStyled>
            {children}
        </AbCardStyled>
    )
}