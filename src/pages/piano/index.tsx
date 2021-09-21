import { PianoConfiguration } from 'components/Configuration';
import { Piano as PianoComponent, Title } from 'components/Exercise';
import Layout from 'components/Layout';

export default function Piano(): JSX.Element {
  return (
    <>
      <Layout rightColumn={<PianoConfiguration />}>
        <Title>Piano</Title>
        <PianoComponent firstNote="c3" lastNote="b4" />
      </Layout>
    </>
  );
}
