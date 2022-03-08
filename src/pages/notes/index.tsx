import { Exercise, Menu, Options, PageLayout } from 'components';
import { useAnswer, useAnswerButtons, useAnswerToggles, useExercise, usePlayButton, useScaleDropdown } from 'hooks';

export default function Notes(): JSX.Element {
  const { scalesNames, selectedScale, setNewSelectedScale } = useScaleDropdown();
  const { answers } = useExercise('notes', selectedScale);
  const { answerToggles, updateIsSelected, selectAllOrThree } = useAnswerToggles(answers);
  const { answer, setNewAnswer, isCorrectAnswer } = useAnswer('notes', answerToggles);
  const { playAnswer } = usePlayButton('notes', answer);
  const { answerButtons, handleAnswerButtonClick, streak } = useAnswerButtons(
    answerToggles,
    isCorrectAnswer,
    setNewAnswer,
    playAnswer
  );

  return (
    <PageLayout
      leftCol={<Menu />}
      rightCol={
        <Options
          answerToggles={answerToggles}
          scalesNames={scalesNames}
          selectedScale={selectedScale}
          handleScaleDropdownChange={setNewSelectedScale}
          handleAnswerToggleAllChange={selectAllOrThree}
          handleAnswerTogglesChange={updateIsSelected}
        />
      }
    >
      <Exercise
        title="Notes"
        playButtonLabel="Note?"
        handlePlayButtonClick={playAnswer}
        answerButtons={answerButtons}
        handleAnswerButtonClick={handleAnswerButtonClick}
        streak={streak}
      />
    </PageLayout>
  );
}
