import { ReactNode } from 'react';
import { Row } from 'react-bootstrap';

interface Props {
  children: ReactNode;
}

export const OptionsTitle = ({ children }: Props): JSX.Element => {
  return (
    <>
      {/*TITLE*/}
      <Row className="justify-content-center p-3">
        <h1>{children}</h1>
      </Row>
    </>
  );
};
