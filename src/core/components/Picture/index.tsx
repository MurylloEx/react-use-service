import React, { Fragment, FunctionComponent } from 'react';
import { ImageStyled } from './styles';

export interface PictureProps {
  source: string;
}

export const Picture: FunctionComponent<PictureProps> = ({ source }) => {
  return (
    <ImageStyled 
      src={source} 
      alt="Astronomic Picture of Day" 
    />
  );
}
