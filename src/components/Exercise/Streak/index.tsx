interface Props {
  streak: number;
}

export default function Streak({ streak }: Props): JSX.Element {
  return (
    <>
      <div className="d-flex justify-content-center m-3">
        {streak > 2 && (
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
}
