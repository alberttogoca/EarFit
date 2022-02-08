import Image from 'next/image';
import { Container, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';

import TooltipIcon from '/public/assets/tooltipIcon.png';

interface Props {
  title: string;
  tooltipMessage?: string;
  children: JSX.Element;
}

export const ConfigSection = ({ title, tooltipMessage, children }: Props): JSX.Element => {
  return (
    <Container>
      <Row className="align-items-center mb-2">
        <header className="lead mr-1">{title}</header>
        {tooltipMessage && (
          <OverlayTrigger delay={{ show: 250, hide: 400 }} overlay={<Tooltip id="1">{tooltipMessage}</Tooltip>}>
            <Image src={TooltipIcon} width="15" height="15" alt="tooltip" />
          </OverlayTrigger>
        )}
      </Row>
      <Row className="mb-4">{children}</Row>
    </Container>
  );
};
