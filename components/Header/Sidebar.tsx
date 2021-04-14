import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

export const Sidebar = ({ children }: IProps): JSX.Element => {
  return <>{children}</>;
};
