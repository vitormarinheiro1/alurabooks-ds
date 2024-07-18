import React from "react";
import styled from "styled-components";

const LabelEstilizada = styled.label`
    display: block;
    font-weight: 700;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    margin-left: 16px;
    margin-bottom: 8px;
`

const InputEstilizado = styled.input`
    font-size: 16px;
    line-height: 24px;
    padding: 8px 24px;
    border: 1px solid;
    border-radius: 45px;
    &:focus{
        outline: none;
    }
    width: 100%;
    box-sizing: border-box;
`

export interface AbCampoTextoProps {
    label?: string;
    placeholder?: string;
    value: string;
    type?: 'text' | 'email' | 'password' | 'date';
    onChange: (value: string) => void;
}

export const AbCampoTexto = ({ 
        label, 
        value, 
        onChange, 
        type = 'text', 
        placeholder = '', 
}: AbCampoTextoProps) => {
    return (
        <div>
            {label && <LabelEstilizada>
                {label}
            </LabelEstilizada>}
            <InputEstilizado
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={(event: any) => onChange(event.target.value)}
            />
        </div>
    )
}