import Layout from 'components/Layout';
import Image from 'next/image';
import { Card, Col, Container, Row } from 'react-bootstrap';

import GithubIcon from '/public/assets/github.svg';
import HiGif from '/public/assets/Hi.gif';
import LinkedInIcon from '/public/assets/linkedin.svg';
import TwitterIcon from '/public/assets/twitter.svg';
import ProfilePic from '/public/images/profile.png';

export default function About(): JSX.Element {
  return (
    <>
      <Layout>
        <Container className="d-flex justify-content-center p-3">
          <div className="avatar shadow">
            <Image src={ProfilePic} width="200px" height="200px" className="avatar" alt="Me" />
          </div>
        </Container>

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
                <p>This is Earfit a webApp for my final degree project in URJC.</p>
                <p>
                  Earfit is an app for musical listening training based on Next.js and Typescript. For example, to
                  identify notes, intervals and scales.
                </p>
                <p>
                  These exercises will improve your musical ability by developing a more intuitive understanding of what
                  you hear.
                </p>
                <p>Let&apos;s give it a try! :)</p>
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
                If you need help with music theory you can visit{' '}
                <a href="https://www.musictheory.net/lessons" target="popup">
                  musictheory.net
                </a>{' '}
                and if you wan&apos;t to learn more about these exercises you can search for{' '}
                <a href="https://en.wikipedia.org/wiki/Ear_training" target="popup">
                  Ear Trainning.
                </a>
              </p>
            </section>

            <section>
              <h4>{`😉`} About Me </h4>
              <p className="lead">
                I&apos;m Alberto, a passionate fullstack developer from Spain. Currently finishing my studies at URJC
                and on an intership at Digital Solutions Iberia in Endesa.
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
      </Layout>
    </>
  );
}
