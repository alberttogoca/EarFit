import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Title({ children }: Props): JSX.Element {
  return (
    <>
      <div className="d-flex justify-content-center p-3 ">
        <h1 className="display-4 ">{children}</h1>
      </div>
    </>
  );
}
