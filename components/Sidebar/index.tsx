import { ReactNode } from 'react';
interface IProps {
  children: ReactNode;
}
export default function Sidebar({ children }: IProps): JSX.Element {
  return <div>{children}</div>;
}
