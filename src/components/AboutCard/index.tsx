import Avatar from 'components/AboutCard/Avatar';
import Image from 'next/image';
import { Card, Col, Row } from 'react-bootstrap';

import GithubIcon from '/public/assets/github.svg';
import HiGif from '/public/assets/Hi.gif';
import LinkedInIcon from '/public/assets/linkedin.svg';
import TwitterIcon from '/public/assets/twitter.svg';
import ProfilePic from '/public/images/profile.png';

export default function AboutCard(): JSX.Element {
  return (
    <>
      <Avatar src={ProfilePic} alt="Me" />
      <Card>
        <Card.Body>
          <Card.Title>
            <h1 className=" display-4 pb-3">Alberto Gómez </h1>
          </Card.Title>

          <section>
            <Row className="pt-9">
              <Col xs="auto" className="pr-2">
                <Image src={HiGif} alt="emoji" width="33" height="33" />
              </Col>
              <Col className="p-0 pt-1 ">
                <h4>Welcome!</h4>
              </Col>
            </Row>
            <div className="lead">
              <p>This is Earfit a Progressive Web App for Musical Ear Training.</p>
              <p>
                The idea is to help musicians develop their hearing skills, such as identifying notes, intervals and
                scales.
              </p>
              <p>
                These exercises will improve your musical ability by developing a more intuitive understanding of what
                you hear.
              </p>
              <p>Practice online or download the app for offline use. Let&apos;s have a try! :)</p>
            </div>
          </section>

          <section>
            <h4>{`📝`} How to practice</h4>
            <ul className="lead">
              <li>Increase practice frequency, not duration. </li>
              <li>Start simple and gradually increase difficulty. </li>
              <li>Track your progress. </li>
              <li>Sing scales and intervals. </li>
              <li>Transcribe music with your instrument. </li>
            </ul>
          </section>

          <section>
            <h4>{`🆘`} Help </h4>
            <p className="lead">
              <p>
                ¿Need help on how to use the application? Here is a{' '}
                <a href="https://www.youtube.com/watch?v=cpJd5_bDa0w" target="popup">
                  Youtube Tutorial
                </a>
                .
              </p>
              On the other hand, if you need help with music theory you can visit{' '}
              <a href="https://www.musictheory.net/lessons" target="popup">
                musictheory.net
              </a>{' '}
              and if you wan&apos;t to learn more about these exercises you can look for{' '}
              <a href="https://en.wikipedia.org/wiki/Ear_training" target="popup">
                Ear Trainning.
              </a>
            </p>
          </section>

          <section>
            <h4>{`😉`} About Me </h4>
            <p className="lead">
              I&apos;m Alberto, a passionate fullstack developer from Spain. Currently finishing my studies at URJC and
              on an intership at Digital Solutions Iberia in Endesa.
            </p>
          </section>

          <section>
            <h4>{`↗️`} Where to find me</h4>
            <p className="lead pt-2 mb-2">
              <a href="https://github.com/alberttogoca" target="popup">
                <Image src={GithubIcon} alt="Github" />
              </a>
              <a href="https://twitter.com/alberttogoca" target="popup">
                <Image src={TwitterIcon} alt="Twitter" />
              </a>
              <a href="https://linkedin.com/in/alberttogoca" target="popup">
                <Image src={LinkedInIcon} alt="LinkedIn" />
              </a>
            </p>
          </section>
        </Card.Body>
      </Card>
    </>
  );
}
