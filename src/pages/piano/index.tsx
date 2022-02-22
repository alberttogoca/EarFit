import { Exercise, Menu, Options, PageLayout } from 'components';

export default function Piano(): JSX.Element {
  return (
    <>
      <PageLayout leftCol={<Menu />} rightCol={<Options />}>
        <Exercise title="Piano" firstNote={'c3'} lastNote={'b4'} />
      </PageLayout>
    </>
  );
}
