interface IProps {
  page: string;
}

export const Options = ({ page }: IProps): JSX.Element => {
  return (
    <>
      <div className="d-flex justify-content-center p-3">
        <h1>Config {page}</h1>
      </div>
      <div className="p-3">
        <p className="lead">This must have de config of the exercise</p>
      </div>
    </>
  );
};
