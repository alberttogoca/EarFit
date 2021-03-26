import ExerciseLayout from 'components/Layout/ExerciseLayout';
import Menu from 'components/Menu';
export default function About(): JSX.Element {
  return (
    <>
      <ExerciseLayout col1={<Menu></Menu>}>
        <div className="d-flex justify-content-center p-3">
          <img src="/images/profile.png" className="avatar shadow" alt="Me"></img>
        </div>

        <div className="card">
          <div className="card-body justify-content-center p-3 ">
            <h1 className="display-4 ">Alberto Gómez</h1>
            <p className="lead">
              Welcome! I&apos;m the author of this app. And you are watching the developer branch of this project.
            </p>
            <p className="lead">Some things work, others don&apos;t. But you can try! </p>
          </div>

          <div className="card-body ">
            <a href="https://github.com/alberttogoca/EarFit" target="popup" className="card-link">
              GitHub
            </a>
            <a href="https://linkedin.com/in/alberttogoca/" target="popup" className="card-link">
              Linkedin
            </a>
          </div>
        </div>
      </ExerciseLayout>
    </>
  );
}
