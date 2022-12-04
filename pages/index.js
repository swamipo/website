import React from 'react'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

import Navbar from '../components/navbar'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Planical modern template</title>
          <meta property="og:title" content="Planical modern template" />
        </Head>
        <Navbar rootClassName="navbar-root-class-name"></Navbar>
        <img
          alt="image"
          src="/playground_assets/photogaphy%20workshop-1500w.png"
          className="home-image"
        />
        <section className="home-section">
          <img
            alt="image"
            src="/playground_assets/completion%20%5B1%5D-1500w.png"
            className="home-image1"
          />
        </section>
        <section className="home-section1">
          <a
            href="https://psbrotherscafe.com/menu"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link"
          >
            <img
              alt="image"
              src="/playground_assets/e2ab8e8271eec239db1f0c94f72d31a9%20%5B3%5D-900h.png"
              className="home-image2"
            />
          </a>
        </section>
        <footer className="home-footer">
          <div className="home-content">
            <main className="home-main-content">
              <div className="home-content1">
                <header className="home-categories">
                  <div className="home-category">
                    <div className="home-header"></div>
                    <div className="home-links">
                      <span className="footer-link">Contact</span>
                      <span className="footer-link">Info@freshy.com</span>
                      <span className="footer-link">Contact@freshy.com</span>
                    </div>
                    <div className="home-links1">
                      <span className="footer-link">LOCATION</span>
                      <span className="footer-link">
                        <span>
                          St. Downtown,
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <br></br>
                        <span>Ottawa, Canada</span>
                      </span>
                    </div>
                    <div className="home-links2">
                      <span className="home-text08 footer-link">
                        <span>
                          Website by PSBROTHERS
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <br></br>
                        <span>©2022. All Rights Reserved</span>
                      </span>
                      <span className="home-text12 footer-link">
                        <span>LEGAL</span>
                        <br></br>
                        <br></br>
                      </span>
                    </div>
                  </div>
                </header>
              </div>
              <section className="home-copyright">
                <span className="home-text16">
                  © 2022 PSBROTHERSCAFE. All Rights Reserved.
                </span>
              </section>
            </main>
            <main className="home-subscribe">
              <main className="home-main"></main>
            </main>
            <section className="home-copyright1">
              <span className="home-text17">
                © 2022 latitude. All Rights Reserved.
              </span>
            </section>
          </div>
        </footer>
        <div>
          <DangerousHTML
            html={`<script>
    /*
Accordion - Code Embed
*/

/* listenForUrlChangesAccordion() makes sure that if you changes pages inside your app,
the Accordions will still work*/

const listenForUrlChangesAccordion = () => {
      let url = location.href;
      document.body.addEventListener(
        "click",
        () => {
          requestAnimationFrame(() => {
            if (url !== location.href) {
              runAccordionCodeEmbed();
              url = location.href;
            }
          });
        },
        true
      );
    };


const runAccordionCodeEmbed = () => {
    const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
    const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
    const accordionIcons = document.querySelectorAll('[data-role="accordion-icon"]'); // All accordion icons

    accordionContents.forEach((accordionContent) => {
        accordionContent.style.display = "none"; //Hides all accordion contents
    });

    accordionContainers.forEach((accordionContainer, index) => {
        accordionContainer.addEventListener("click", () => {
            accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
            });

            accordionIcons.forEach((accordionIcon) => {
                accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
            });

            accordionContents[index].style.display = "flex"; // Shows accordion content
            accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
        });
    });
}

runAccordionCodeEmbed()
listenForUrlChangesAccordion()

/*
Here's what the above is doing:
    1. Selects all accordion containers, contents, and icons
    2. Hides all accordion contents
    3. Adds an event listener to each accordion container
    4. When an accordion container is clicked, it:
        - Hides all accordion contents
        - Resets all icon transforms to 0deg (default)
        - Checks if this container has class "accordion-open"
            - If it does, it removes class "accordion-open"
            - If it doesn't, it:
                - Removes class "accordion-open" from all containers
                - Adds class "accordion-open" to this container
                - Shows accordion content
                - Rotates accordion icon 180deg
*/
</script>`}
          ></DangerousHTML>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
          }
          .home-image {
            width: 100%;
            height: 933px;
            object-fit: cover;
          }
          .home-section {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            height: 973px;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 994px;
            justify-content: flex-start;
          }
          .home-image1 {
            width: 100%;
            height: 971px;
            align-self: flex-end;
            object-fit: cover;
          }
          .home-section1 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            height: 815px;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .home-link {
            display: contents;
          }
          .home-image2 {
            width: 100%;
            height: 868px;
            align-self: flex-end;
            object-fit: cover;
            text-decoration: none;
          }
          .home-footer {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            height: 241px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-content {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-main-content {
            gap: var(--dl-space-space-fiveunits);
            width: 1318px;
            height: 292px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-content1 {
            width: 816px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-categories {
            gap: var(--dl-space-space-fourunits);
            top: 0px;
            left: 0px;
            width: 829px;
            height: 184px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .home-category {
            gap: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header {
            gap: var(--dl-space-space-unit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-links {
            gap: var(--dl-space-space-unit);
            top: 57px;
            left: -434px;
            width: 234px;
            height: 163px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-links1 {
            gap: var(--dl-space-space-unit);
            top: 65px;
            right: -421px;
            width: 234px;
            height: 163px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-links2 {
            gap: var(--dl-space-space-unit);
            left: -2px;
            width: 183px;
            bottom: -67px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text08 {
            top: 33px;
            left: -123px;
            position: absolute;
          }
          .home-text12 {
            top: -7px;
            left: -126px;
            position: absolute;
          }
          .home-copyright {
            gap: var(--dl-space-space-fiveunits);
            left: 0px;
            width: 100%;
            bottom: 28px;
            height: 17px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-end;
          }
          .home-text16 {
            color: #b1b1b1;
            width: 100%;
            font-size: 14px;
            align-self: flex-end;
            font-family: Poppins;
            line-height: 21px;
          }
          .home-subscribe {
            gap: var(--dl-space-space-unit);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-main {
            gap: var(--dl-space-space-oneandhalfunits);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-copyright1 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: none;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text17 {
            color: #c4c4c4;
            width: 100%;
            font-size: 14px;
            font-family: Poppins;
            line-height: 21px;
          }
          @media (max-width: 991px) {
            .home-section1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-content {
              gap: var(--dl-space-space-threeunits);
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-copyright {
              display: none;
            }
            .home-copyright1 {
              display: flex;
            }
          }
          @media (max-width: 767px) {
            .home-section1 {
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-content1 {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .home-categories {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
