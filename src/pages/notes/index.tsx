import { Exercise, Menu, Options, PageLayout } from 'components';
import { useAnswer, useAnswerButtons, useAnswerToggles, useExercise, usePlayButton, useScaleDropdown } from 'hooks';
import { GetStaticProps } from 'next';
import { getScaleNames } from 'services/scaleService';

export default function Notes({ scaleNames }: Props): JSX.Element {
  const { selectedScale, setNewSelectedScale } = useScaleDropdown(scaleNames);
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
          scalesNames={scaleNames}
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

interface Props {
  scaleNames: string[];
}

export const getStaticProps: GetStaticProps<Props> = () => {
  const scaleNames = getScaleNames();
  return {
    props: {
      scaleNames,
    },
  };
};
