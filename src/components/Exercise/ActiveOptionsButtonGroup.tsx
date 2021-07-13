import { ActiveOptionsButtonItem } from 'components/Exercise/ActiveOptionsButtonItem';

interface Props {
  options: string[];
}

export const ActiveOptionsButtonGroup = ({ options }: Props): JSX.Element => {
  return (
    <>
      <div>
        {options.map((option, idx) => (
          <ActiveOptionsButtonItem key={option} options={options} option={option} idx={idx} />
        ))}
      </div>
    </>
  );
};
