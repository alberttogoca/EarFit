import Image from 'next/image';
import { Container } from 'react-bootstrap';

interface Props {
  src: StaticImageData;
  alt: string;
}

export default function Avatar({ src, alt }: Props): JSX.Element {
  return (
    <>
      <Container className="d-flex justify-content-center p-3">
        <div className="avatar shadow">
          <Image src={src} width="200px" height="200px" className="avatar" alt={alt} />
        </div>
      </Container>
    </>
  );
}
