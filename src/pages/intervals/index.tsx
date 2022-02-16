import { Exercise } from 'components/Exercise';
import PageLayout from 'components/Layout/PageLayout';
import { Menu } from 'components/Menu';
import { Options } from 'components/Options';
import { useAnswerButtons, useAnswerToggles, useIntervals, usePlayButton } from 'hooks';

export default function Intervals(): JSX.Element {
  const { intervals, answer, setNewAnswer, changeDirection } = useIntervals(); //Esto a contexto?
  const { playInterval } = usePlayButton();
  const { items, updateIsSelected, selectAllOrThree } = useAnswerToggles(intervals);
  const { answerButtons, handleAnswerButtonClick, streak } = useAnswerButtons(
    items,
    answer,
    setNewAnswer,
    playInterval
  );

  //const { answer, setNewAnswer } = useAnswer(items.filter((s) => s.isSelected));

  return (
    <PageLayout
      leftCol={<Menu />}
      rightCol={
        <Options
          answerToggles={intervals}
          handleDirectionChange={changeDirection}
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
