import { Exercise } from 'components/Exercise';
import Layout from 'components/Layout';
import { Menu } from 'components/Menu';
import { Options } from 'components/Options';
import { useAnswerButtons, usePlayButton, useScales, useStreak } from 'hooks';
import Selectable from 'utils/Selectable';

export default function Scales(): JSX.Element {
  const { scales, answer, setNewAnswer, updateIsSelected, changeDirection, selectAllOrThree } = useScales();
  const { instrument, playScale } = usePlayButton();
  const { answerButtons, updateAnswerButtonColor, clearAnswerButtonColor } = useAnswerButtons(scales);
  const { streak, clearStreak, IncrementStreak } = useStreak();

  function handleAnswerButtonClick(selectedOption: Selectable): boolean {
    if (selectedOption.id === answer.id) {
      setNewAnswer();
      updateAnswerButtonColor(selectedOption, true);
      IncrementStreak();
      playScale(answer);

      setTimeout(() => {
        clearAnswerButtonColor();
      }, 1000);

      return true;
    } else {
      updateAnswerButtonColor(selectedOption, false);
      clearStreak();
      return false;
    }
  }

  return (
    <Layout
      leftCol={<Menu />}
      rightCol={
        <Options
          selectables={scales}
          handleDirectionChange={() => changeDirection()}
          handleToggleButtonChange={(scale: Selectable) => updateIsSelected(scale.id, scale.isSelected)}
          handleToggleAllChange={selectAllOrThree}
        />
      }
    >
      <Exercise
        title="Scales"
        playButtonLabel="Scale?"
        instrument={instrument}
        handlePlayButtonClick={() => playScale(answer)}
        selectables={answerButtons}
        handleAnswerButtonClick={handleAnswerButtonClick}
        streak={streak}
      />
    </Layout>
  );
}
