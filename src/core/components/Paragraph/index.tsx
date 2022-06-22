import React, { FunctionComponent } from 'react';
import { ParagraphStyled } from './styles';

export interface ParagraphProps {
  children: string;
}

export const Paragraph: FunctionComponent<ParagraphProps> = ({ children }) => {
  return (
    <ParagraphStyled>{children}</ParagraphStyled>
  );
}
