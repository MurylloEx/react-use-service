import React, { Fragment, FunctionComponent, ReactNode } from 'react';

export interface RenderProps {
  if: boolean;
  children: ReactNode;
}

export const Render: FunctionComponent<RenderProps> = ({ if: condition, children }) => {
  return condition ? (
    <Fragment>{children}</Fragment>
  ) : (
    <Fragment />
  );
}
