import AnswerToggles from 'components/Options/ConfigSection/AnswerToggles';
import DirectionSelector from 'components/Options/ConfigSection/DirectionSelector';
import InstrumentSelector from 'components/Options/ConfigSection/InstrumentSelector';
import ScaleDropdown from 'components/Options/ConfigSection/ScaleDropdown';
import Image from 'next/image';
import { Container, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';

import TooltipIcon from '/public/assets/tooltipIcon.png';

interface Props {
  title: string;
  tooltipMessage?: string;
  config: JSX.Element;
}

export const ConfigSection = ({ title, tooltipMessage, config }: Props): JSX.Element => {
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
      <Row className="mb-4">{config}</Row>
    </Container>
  );
};

export { AnswerToggles, DirectionSelector, InstrumentSelector, ScaleDropdown };
