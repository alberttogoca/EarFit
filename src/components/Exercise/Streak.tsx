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
                🔥 Streak: {streak}
              </span>
              {/* <span className="badge rounded-pill bg-danger" role="img" aria-label="fuego">
                🔥 Streak: {streak}
              </span> */}
            </h1>
          </>
        )}
      </div>
    </>
  );
};
