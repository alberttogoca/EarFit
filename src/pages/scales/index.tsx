import { AnswerButtons, Piano, PlayButton, Streak, Title } from 'components/Exercise';
import Layout from 'components/Layout';
import { ScalesOptions } from 'components/Options';
import { useAnswerButtons, usePlayButton, useScales, useStreak } from 'hooks';
import AnswerButton from 'utils/AnswerButton';
import Selectable from 'utils/Selectable';

export default function Scales(): JSX.Element {
  const { scales, answer, setNewAnswer, updateIsSelected, changeDirection, selectAllOrThree } = useScales();
  const { instrument, playScale } = usePlayButton();
  const { answerButtons, updateAnswerButtonColor, clearAnswerButtonColor } = useAnswerButtons(scales);
  const { streak, clearStreak, IncrementStreak } = useStreak();

  function handleAnswerButtonClick(selectedOption: AnswerButton): boolean {
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
      rightColumn={
        <ScalesOptions
          scales={scales}
          handleDirectionChange={() => changeDirection()}
          handleToggleButtonChange={(scale: Selectable) => updateIsSelected(scale.id, scale.isSelected)}
          handleToggleAllChange={selectAllOrThree}
        />
      }
    >
      <Title>Scales</Title>
      <PlayButton title={'Scale?'} instrument={instrument} handlePlayButtonClick={() => playScale(answer)} />
      <AnswerButtons answerButtons={answerButtons} handleAnswerButtonClick={handleAnswerButtonClick} />
      <Streak streak={streak} />
      <Piano />
    </Layout>
  );
}
