import { Piano as PianoComponent, Title } from 'components/Exercise';
import Layout from 'components/Layout';
import { PianoOptions } from 'components/Options';

export default function Piano(): JSX.Element {
  return (
    <>
      <Layout rightColumn={<PianoOptions />}>
        <Title>Piano</Title>
        <PianoComponent firstNote="c3" lastNote="b4" />
      </Layout>
    </>
  );
}
