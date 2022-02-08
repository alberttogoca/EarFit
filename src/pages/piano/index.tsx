import { Piano as PianoComponent } from 'components/Exercise/Piano';
import { Title } from 'components/Exercise/Title';
import Layout from 'components/Layout';
import { Options } from 'components/Options';

export default function Piano(): JSX.Element {
  return (
    <>
      <Layout rightColumn={<Options />}>
        <Title>Piano</Title>
        <PianoComponent firstNote="c3" lastNote="b4" />
      </Layout>
    </>
  );
}
