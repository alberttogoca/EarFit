import ItemMenu from './ItemMenu';

interface IProps {
  home?: boolean;
}

export default function Menu({ home }: IProps): JSX.Element {
  return (
    <>
      <ItemMenu home={home} href="/notes">
        Notes
      </ItemMenu>
      <ItemMenu home={home} href="/intervals">
        Intervals
      </ItemMenu>
      <ItemMenu home={home} href="/scales">
        Scales
      </ItemMenu>
      <ItemMenu home={home} href="/piano">
        Piano
      </ItemMenu>
      <ItemMenu home={home} href="/about">
        About
      </ItemMenu>
    </>
  );
}
