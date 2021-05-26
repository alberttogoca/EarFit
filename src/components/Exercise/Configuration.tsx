interface IProps {
  page: string;
}

export const Configuration = ({ page }: IProps): JSX.Element => {
  return (
    <>
      <div className="d-flex justify-content-center p-3">
        <h1>Options</h1>
      </div>
      <div className="p-3">
        <p className="lead">This must have de config of the exercise {page}</p>
      </div>
    </>
  );
};
