import { Exercise } from 'components/Exercise';
import PageLayout from 'components/Layout/PageLayout';
import { Menu } from 'components/Menu';
import { Options } from 'components/Options';
import { useAnswerButtons, usePlayButton, useScales, useStreak } from 'hooks';
import Selectable from 'utils/Selectable';

export default function Scales(): JSX.Element {
  const {
    scales,
    setNewScales,
    answer,
    setNewAnswer,
    updateIsSelected,
    changeDirection,
    selectAllOrThree,
  } = useScales();
  const { playScale } = usePlayButton();
  const { clearAllAnswerButtonsColor, updateAnswerButtonColor } = useAnswerButtons(scales, setNewScales);
  const { streak, clearStreak, IncrementStreak } = useStreak();

  function handleAnswerButtonClick(selectedOption: Selectable): boolean {
    if (selectedOption.id === answer.id) {
      setNewAnswer();
      updateAnswerButtonColor(selectedOption, true);
      IncrementStreak();
      playScale(answer);

      setTimeout(() => {
        clearAllAnswerButtonsColor();
      }, 1000);

      return true;
    } else {
      updateAnswerButtonColor(selectedOption, false);
      clearStreak();
      return false;
    }
  }

  return (
    <PageLayout
      leftCol={<Menu />}
      rightCol={
        <Options
          answerToggles={scales}
          handleDirectionChange={changeDirection}
          handleToggleButtonChange={updateIsSelected}
          handleToggleAllChange={selectAllOrThree}
        />
      }
    >
      <Exercise
        title="Scales"
        playButtonLabel="Scale?"
        handlePlayButtonClick={() => playScale(answer)}
        answerButtons={scales}
        handleAnswerButtonClick={handleAnswerButtonClick}
        streak={streak}
      />
    </PageLayout>
  );
}
