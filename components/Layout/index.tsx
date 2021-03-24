import Header from 'components/Header';
import { ReactNode } from 'react';
interface IProps {
  children: ReactNode;
}
export default function Layout({ children }: IProps): JSX.Element {
  return (
    <>
      <Header></Header>
      {children}
    </>
  );
}
