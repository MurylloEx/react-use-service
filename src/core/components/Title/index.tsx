import React, { FunctionComponent } from 'react';
import { TitleStyled } from './styles';

export interface TitleProps {
  children: string;
}

export const Title: FunctionComponent<TitleProps> = ({ children }) => {
  return (
    <TitleStyled>{children}</TitleStyled>
  );
}
