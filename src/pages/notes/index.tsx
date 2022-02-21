import { Exercise } from 'components/Exercise';
import PageLayout from 'components/Layout/PageLayout';
import { Menu } from 'components/Menu';
import { Options } from 'components/Options';
import { useAnswer, useAnswerButtons, useAnswerToggles, useExercise, usePlayButton, useScaleDropdown } from 'hooks';
import { GetStaticProps } from 'next';
import { getScaleNames } from 'services/scaleService';

export default function Notes({ scaleNames }: Props): JSX.Element {
  const { selectedScale, setNewSelectedScale } = useScaleDropdown(scaleNames);
  const { answers } = useExercise('notes', selectedScale);
  const { playNote } = usePlayButton();
  const { answerToggles, updateIsSelected, selectAllOrThree } = useAnswerToggles(answers);
  const { answer, setNewAnswer } = useAnswer('notes', answerToggles);
  const { answerButtons, handleAnswerButtonClick, streak } = useAnswerButtons(
    answerToggles,
    answer,
    setNewAnswer,
    playNote
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
        handlePlayButtonClick={() => playNote(answer)}
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
