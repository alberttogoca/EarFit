import { Exercise } from 'components/Exercise';
import Layout from 'components/Layout';
import { Menu } from 'components/Menu';
import { Options } from 'components/Options';

export default function Piano(): JSX.Element {
  return (
    <>
      <Layout leftCol={<Menu />} rightCol={<Options />}>
        <Exercise title="Piano" firstNote={'c3'} lastNote={'b4'} />
      </Layout>
    </>
  );
}
