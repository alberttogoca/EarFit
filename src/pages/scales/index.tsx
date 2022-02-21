import { Exercise } from 'components/Exercise';
import PageLayout from 'components/Layout/PageLayout';
import { Menu } from 'components/Menu';
import { Options } from 'components/Options';
import { useAnswer, useAnswerButtons, useAnswerToggles, usePlayButton, useScales } from 'hooks';

export default function Scales(): JSX.Element {
  const { scales } = useScales();
  const { playScale, reverse, changeDirection } = usePlayButton();
  const { answerToggles, updateIsSelected, selectAllOrThree } = useAnswerToggles(scales);
  const { answer, setNewAnswer } = useAnswer(answerToggles.filter((s) => s.isSelected));
  const { answerButtons, handleAnswerButtonClick, streak } = useAnswerButtons(
    answerToggles,
    answer,
    setNewAnswer,
    playScale
  );

  return (
    <PageLayout
      leftCol={<Menu />}
      rightCol={
        <Options
          reverse={reverse}
          handleDirectionChange={changeDirection}
          answerToggles={answerToggles}
          handleAnswerToggleAllChange={selectAllOrThree}
          handleAnswerTogglesChange={updateIsSelected}
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
