interface Props {
  streak: number;
}

export const Streak = ({ streak }: Props): JSX.Element => {
  return (
    <>
      <div className="d-flex justify-content-center m-3">
        {streak > 4 && (
          <>
            <h1 className="lead">
              <span role="img" aria-label="fuego">
                🔥
              </span>{' '}
              Streak: {streak}
            </h1>
          </>
        )}
      </div>
    </>
  );
};
