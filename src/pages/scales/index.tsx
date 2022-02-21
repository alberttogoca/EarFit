import { Exercise } from 'components/Exercise';
import PageLayout from 'components/Layout/PageLayout';
import { Menu } from 'components/Menu';
import { Options } from 'components/Options';
import { useAnswer, useAnswerButtons, useAnswerToggles, usePlayButton, useScales } from 'hooks';

export default function Scales(): JSX.Element {
  const { scales, changeDirection } = useScales();
  const { playScale } = usePlayButton();
  const { items, updateIsSelected, selectAllOrThree } = useAnswerToggles(scales);
  const { answer, setNewAnswer } = useAnswer(items.filter((s) => s.isSelected));
  const { answerButtons, handleAnswerButtonClick, streak } = useAnswerButtons(items, answer, setNewAnswer, playScale);

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
