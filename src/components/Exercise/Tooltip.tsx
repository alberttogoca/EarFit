interface Props {
  children?: string;
}
export const Tooltip = ({ children }: Props): JSX.Element => {
  return (
    <>
      <img
        src="/images/tooltipIcon.png"
        alt="tooltip"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title={children}
        width="15"
      ></img>
    </>
  );
};
