import { Exercise } from 'components/Exercise';
import { Menu } from 'components/Menu';
import { Options } from 'components/Options';
import PageLayout from 'components/PageLayout';

export default function Piano(): JSX.Element {
  return (
    <>
      <PageLayout leftCol={<Menu />} rightCol={<Options />}>
        <Exercise title="Piano" firstNote={'c3'} lastNote={'b4'} />
      </PageLayout>
    </>
  );
}
