import HomeLayout from 'components/Layout/HomeLayout';
import { Menu } from 'components/Menu';

export default function Home(): JSX.Element {
  return (
    <>
      <HomeLayout>
        <Menu></Menu>
      </HomeLayout>
    </>
  );
}
