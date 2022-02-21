import { Exercise } from 'components/Exercise';
import PageLayout from 'components/Layout/PageLayout';
import { Menu } from 'components/Menu';
import { Options } from 'components/Options';
import { useAnswerButtons, useAnswerToggles, useIntervalAnswer, useIntervals, usePlayButton } from 'hooks';

export default function Intervals(): JSX.Element {
  const { intervals } = useIntervals();
  const { playInterval } = usePlayButton();
  const { items, updateIsSelected, selectAllOrThree } = useAnswerToggles(intervals);
  const { answer, setNewAnswer, changeDirection } = useIntervalAnswer(items.filter((s) => s.isSelected));
  const { answerButtons, handleAnswerButtonClick, streak } = useAnswerButtons(
    items,
    answer,
    setNewAnswer,
    playInterval
  );

  return (
    <PageLayout
      leftCol={<Menu />}
      rightCol={
        <Options
          handleDirectionChange={changeDirection}
          answerToggles={items}
          handleToggleAllChange={selectAllOrThree}
          handleToggleButtonChange={updateIsSelected}
        />
      }
    >
      <Exercise
        title="Intervals"
        playButtonLabel="Interval?"
        handlePlayButtonClick={() => playInterval(answer)}
        answerButtons={answerButtons}
        handleAnswerButtonClick={handleAnswerButtonClick}
        streak={streak}
      />
    </PageLayout>
  );
}
