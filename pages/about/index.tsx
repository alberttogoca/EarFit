import ExerciseLayout from 'components/Layout/ExerciseLayout';
import { Menu } from 'components/Menu';
export default function About(): JSX.Element {
  return (
    <>
      <ExerciseLayout col1={<Menu></Menu>}>
        <div className="d-flex justify-content-center p-3">
          <img src="/images/profile.png" className="avatar shadow" alt="Me"></img>
        </div>

        <div className="card">
          <div className="card-body p-3 ">
            <h1 className=" display-4 ">Alberto Gómez </h1>
            <p className="lead">
              <h4>
                <img
                  src="https://raw.githubusercontent.com/iampavangandhi/iampavangandhi/master/gifs/Hi.gif"
                  alt="emoji"
                  width="40"
                ></img>
                Welcome!
              </h4>
              This is Earfit a webApp for my final degree project in URJC.
            </p>
            <p className="lead">
              Earfit is an app for musical listening training based on Next.js and Typescript. For example, to identify
              notes, intervals, scales, chord types, etc.
            </p>

            <p className="lead">
              This is an unfinished version. Some things work, others don&apos;t. Let&apos;s give it a try! :)
            </p>

            <p className="lead">
              <h4>About Me </h4>
              I&apos;m Alberto, a passionate fullstack developer from Spain. Currently finishing my studies at URJC and
              on an intership at Digital Solutions Iberia
            </p>

            <p className="lead">
              <h4>Where to find me</h4>
              {/* GitHub */}
              <a href="https://github.com/alberttogoca" target="popup">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  href="http://www.w3.org/1999/xlink"
                  width="92"
                  height="28"
                  role="img"
                  aria-label="GITHUB"
                >
                  <title>GITHUB</title>
                  <g shapeRendering="crispEdges">
                    <rect width="0" height="28" fill="#555" />
                    <rect x="0" width="92" height="28" fill="#12100e" />
                  </g>
                  <g
                    fill="#fff"
                    textAnchor="middle"
                    fontFamily="Verdana,Geneva,DejaVu Sans,sans-serif"
                    textRendering="geometricPrecision"
                    fontSize="100"
                  >
                    <image
                      x="9"
                      y="7"
                      width="14"
                      height="14"
                      xlinkHref="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPkdpdEh1YiBpY29uPC90aXRsZT48cGF0aCBkPSJNMTIgLjI5N2MtNi42MyAwLTEyIDUuMzczLTEyIDEyIDAgNS4zMDMgMy40MzggOS44IDguMjA1IDExLjM4NS42LjExMy44Mi0uMjU4LjgyLS41NzcgMC0uMjg1LS4wMS0xLjA0LS4wMTUtMi4wNC0zLjMzOC43MjQtNC4wNDItMS42MS00LjA0Mi0xLjYxQzQuNDIyIDE4LjA3IDMuNjMzIDE3LjcgMy42MzMgMTcuN2MtMS4wODctLjc0NC4wODQtLjcyOS4wODQtLjcyOSAxLjIwNS4wODQgMS44MzggMS4yMzYgMS44MzggMS4yMzYgMS4wNyAxLjgzNSAyLjgwOSAxLjMwNSAzLjQ5NS45OTguMTA4LS43NzYuNDE3LTEuMzA1Ljc2LTEuNjA1LTIuNjY1LS4zLTUuNDY2LTEuMzMyLTUuNDY2LTUuOTMgMC0xLjMxLjQ2NS0yLjM4IDEuMjM1LTMuMjItLjEzNS0uMzAzLS41NC0xLjUyMy4xMDUtMy4xNzYgMCAwIDEuMDA1LS4zMjIgMy4zIDEuMjMuOTYtLjI2NyAxLjk4LS4zOTkgMy0uNDA1IDEuMDIuMDA2IDIuMDQuMTM4IDMgLjQwNSAyLjI4LTEuNTUyIDMuMjg1LTEuMjMgMy4yODUtMS4yMy42NDUgMS42NTMuMjQgMi44NzMuMTIgMy4xNzYuNzY1Ljg0IDEuMjMgMS45MSAxLjIzIDMuMjIgMCA0LjYxLTIuODA1IDUuNjI1LTUuNDc1IDUuOTIuNDIuMzYuODEgMS4wOTYuODEgMi4yMiAwIDEuNjA2LS4wMTUgMi44OTYtLjAxNSAzLjI4NiAwIC4zMTUuMjEuNjkuODI1LjU3QzIwLjU2NSAyMi4wOTIgMjQgMTcuNTkyIDI0IDEyLjI5N2MwLTYuNjI3LTUuMzczLTEyLTEyLTEyIi8+PC9zdmc+"
                    />
                    <text fill="#fff" x="550" y="175" fontWeight="bold" transform="scale(.1)" textLength="500">
                      GITHUB
                    </text>
                  </g>
                </svg>
              </a>
              {/* Twitter */}
              <a href="https://twitter.com/alberttogoca" target="popup">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  href="http://www.w3.org/1999/xlink"
                  width="99.5"
                  height="28"
                  role="img"
                  aria-label="TWITTER"
                >
                  <title>TWITTER</title>
                  <g shapeRendering="crispEdges">
                    <rect width="0" height="28" fill="#555" />
                    <rect x="0" width="99.5" height="28" fill="#1da1f2" />
                  </g>
                  <g
                    fill="#fff"
                    textAnchor="middle"
                    fontFamily="Verdana,Geneva,DejaVu Sans,sans-serif"
                    textRendering="geometricPrecision"
                    fontSize="100"
                  >
                    <image
                      x="9"
                      y="7"
                      width="14"
                      height="14"
                      xlinkHref="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHRpdGxlPlR3aXR0ZXIgaWNvbjwvdGl0bGU+PHBhdGggZD0iTTIzLjk1MyA0LjU3YTEwIDEwIDAgMDEtMi44MjUuNzc1IDQuOTU4IDQuOTU4IDAgMDAyLjE2My0yLjcyM2MtLjk1MS41NTUtMi4wMDUuOTU5LTMuMTI3IDEuMTg0YTQuOTIgNC45MiAwIDAwLTguMzg0IDQuNDgyQzcuNjkgOC4wOTUgNC4wNjcgNi4xMyAxLjY0IDMuMTYyYTQuODIyIDQuODIyIDAgMDAtLjY2NiAyLjQ3NWMwIDEuNzEuODcgMy4yMTMgMi4xODggNC4wOTZhNC45MDQgNC45MDQgMCAwMS0yLjIyOC0uNjE2di4wNmE0LjkyMyA0LjkyMyAwIDAwMy45NDYgNC44MjcgNC45OTYgNC45OTYgMCAwMS0yLjIxMi4wODUgNC45MzYgNC45MzYgMCAwMDQuNjA0IDMuNDE3IDkuODY3IDkuODY3IDAgMDEtNi4xMDIgMi4xMDVjLS4zOSAwLS43NzktLjAyMy0xLjE3LS4wNjdhMTMuOTk1IDEzLjk5NSAwIDAwNy41NTcgMi4yMDljOS4wNTMgMCAxMy45OTgtNy40OTYgMTMuOTk4LTEzLjk4NSAwLS4yMSAwLS40Mi0uMDE1LS42M0E5LjkzNSA5LjkzNSAwIDAwMjQgNC41OXoiLz48L3N2Zz4="
                    />
                    <text fill="#fff" x="587.5" y="175" fontWeight="bold" transform="scale(.1)" textLength="575">
                      TWITTER
                    </text>
                  </g>
                </svg>
              </a>
              {/* linkedin */}
              <a href="https://linkedin.com/alberttogoca" target="popup">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  href="http://www.w3.org/1999/xlink"
                  width="107"
                  height="28"
                  role="img"
                  aria-label="LINKEDIN"
                >
                  <title>LINKEDIN</title>
                  <g shapeRendering="crispEdges">
                    <rect width="0" height="28" fill="#555" />
                    <rect x="0" width="107" height="28" fill="#0077b5" />
                  </g>
                  <g
                    fill="#fff"
                    textAnchor="middle"
                    fontFamily="Verdana,Geneva,DejaVu Sans,sans-serif"
                    textRendering="geometricPrecision"
                    fontSize="100"
                  >
                    <image
                      x="9"
                      y="7"
                      width="14"
                      height="14"
                      xlinkHref="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPkxpbmtlZEluIGljb248L3RpdGxlPjxwYXRoIGQ9Ik0yMC40NDcgMjAuNDUyaC0zLjU1NHYtNS41NjljMC0xLjMyOC0uMDI3LTMuMDM3LTEuODUyLTMuMDM3LTEuODUzIDAtMi4xMzYgMS40NDUtMi4xMzYgMi45Mzl2NS42NjdIOS4zNTFWOWgzLjQxNHYxLjU2MWguMDQ2Yy40NzctLjkgMS42MzctMS44NSAzLjM3LTEuODUgMy42MDEgMCA0LjI2NyAyLjM3IDQuMjY3IDUuNDU1djYuMjg2ek01LjMzNyA3LjQzM2MtMS4xNDQgMC0yLjA2My0uOTI2LTIuMDYzLTIuMDY1IDAtMS4xMzguOTItMi4wNjMgMi4wNjMtMi4wNjMgMS4xNCAwIDIuMDY0LjkyNSAyLjA2NCAyLjA2MyAwIDEuMTM5LS45MjUgMi4wNjUtMi4wNjQgMi4wNjV6bTEuNzgyIDEzLjAxOUgzLjU1NVY5aDMuNTY0djExLjQ1MnpNMjIuMjI1IDBIMS43NzFDLjc5MiAwIDAgLjc3NCAwIDEuNzI5djIwLjU0MkMwIDIzLjIyNy43OTIgMjQgMS43NzEgMjRoMjAuNDUxQzIzLjIgMjQgMjQgMjMuMjI3IDI0IDIyLjI3MVYxLjcyOUMyNCAuNzc0IDIzLjIgMCAyMi4yMjIgMGguMDAzeiIvPjwvc3ZnPg=="
                    />
                    <text fill="#fff" x="625" y="175" fontWeight="bold" transform="scale(.1)" textLength="650">
                      LINKEDIN
                    </text>
                  </g>
                </svg>
              </a>
            </p>
          </div>
        </div>
      </ExerciseLayout>
    </>
  );
}
