import { Exercise } from 'components/Exercise';
import PageLayout from 'components/Layout/PageLayout';
import { Menu } from 'components/Menu';
import { Options } from 'components/Options';
import { useAnswerButtons, useAnswerToggles, usePlayButton, useScales } from 'hooks';

export default function Scales(): JSX.Element {
  const { scales, setNewScales, answer, setNewAnswer, changeDirection } = useScales(); //Esto a contexto?
  const { playScale } = usePlayButton();
  const { updateIsSelected, selectAllOrThree } = useAnswerToggles(scales, setNewScales);
  const { answerButtons, handleAnswerButtonClick, streak } = useAnswerButtons(scales, answer, setNewAnswer, playScale);

  return (
    <PageLayout
      leftCol={<Menu />}
      rightCol={
        <Options
          answerToggles={scales}
          handleDirectionChange={changeDirection}
          handleToggleAllChange={selectAllOrThree}
          handleToggleButtonChange={updateIsSelected}
        />
      }
    >
      <Exercise
        title="Scales"
        playButtonLabel="Scale?"
        handlePlayButtonClick={() => playScale(answer)}
        answerButtons={answerButtons}
        handleAnswerButtonClick={handleAnswerButtonClick}
        streak={streak}
      />
    </PageLayout>
  );
}
