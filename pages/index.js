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
        <img
          alt="image"
          src="/playground_assets/completion%20%5B1%5D-1500w.png"
          className="home-image1"
        />
        <img
          alt="image"
          src="/playground_assets/e2ab8e8271eec239db1f0c94f72d31a9%20%5B3%5D-1500w.png"
          className="home-image2"
        />
        <footer className="home-footer">
          <div className="home-container1">
            <div className="home-logo">
              <img
                alt="logo"
                src="/playground_assets/catering-removebg-preview-2-1500h.png"
                className="home-image3"
              />
            </div>
            <div className="home-links-container">
              <div className="home-container2">
                <div className="home-product-container">
                  <span className="home-text">
                    <br></br>
                    <span>Contact</span>
                    <br></br>
                  </span>
                  <span className="home-text04">Info@freshy.com</span>
                  <span className="home-text05">
                    <br></br>
                    <span>Contact@freshy.com</span>
                  </span>
                </div>
                <div className="home-product-container1">
                  <span className="home-text08">LEGAL</span>
                  <span className="home-text09">
                    <span>Website by PSBROTHERS</span>
                    <br></br>
                    <span>©2023. All Rights Reserved</span>
                  </span>
                </div>
                <div className="home-company-container">
                  <span className="home-text13">LOCATION</span>
                  <span className="home-text14">
                    <span>St. Downtown,</span>
                    <br></br>
                    <span>Ottawa, Canada</span>
                  </span>
                </div>
              </div>
              <div className="home-container3"></div>
            </div>
          </div>
          <div className="home-separator"></div>
          <span className="home-text18">
            © 2023 PSBROTHERS, All Rights Reserved.
          </span>
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
            display: flex;
            object-fit: cover;
          }
          .home-image1 {
            width: 100%;
            height: 933px;
            object-fit: cover;
          }
          .home-image2 {
            width: 100%;
            height: 791px;
            object-fit: cover;
          }
          .home-footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .home-container1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-logo {
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image3 {
            height: 2rem;
          }
          .home-links-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container2 {
            width: 813px;
            display: flex;
            align-items: flex-start;
            margin-right: 10rem;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-product-container {
            width: 184px;
            height: 163px;
            display: flex;
            position: relative;
            align-items: flex-start;
            margin-right: 10rem;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text04 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text05 {
            top: 75px;
            left: -3px;
            position: absolute;
          }
          .home-product-container1 {
            width: 228px;
            display: flex;
            align-items: flex-start;
            margin-right: 10rem;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text08 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text09 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-company-container {
            width: 116px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text13 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text14 {
            right: -14px;
            bottom: -33px;
            position: absolute;
            font-weight: 300;
          }
          .home-container3 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-separator {
            width: 100%;
            height: 1px;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-gray-900);
          }
          .home-text18 {
            align-self: center;
          }
          @media (max-width: 991px) {
            .home-image {
              width: 100%;
              height: 760px;
            }
            .home-image1 {
              width: 100%;
              height: 842px;
            }
            .home-image2 {
              width: 100%;
              height: 629px;
            }
            .home-footer {
              flex-direction: column;
            }
            .home-logo {
              position: relative;
            }
            .home-image3 {
              right: -474px;
              bottom: -175px;
              position: absolute;
            }
            .home-container2 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .home-product-container {
              margin-right: var(--dl-space-space-fourunits);
            }
            .home-product-container1 {
              margin-right: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .home-image {
              width: 100%;
              height: 507px;
            }
            .home-image1 {
              width: 100%;
              height: 533px;
            }
            .home-image2 {
              width: 100%;
              height: 393px;
            }
            .home-footer {
              height: 356px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-container1 {
              height: 259px;
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .home-logo {
              align-items: center;
            }
            .home-image3 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-links-container {
              width: 100%;
              align-items: flex-start;
              flex-direction: row;
              justify-content: center;
            }
            .home-container2 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .home-product-container {
              margin-right: var(--dl-space-space-fourunits);
            }
            .home-product-container1 {
              margin-right: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 479px) {
            .home-image {
              width: 100%;
              height: 366px;
            }
            .home-image1 {
              width: 100%;
              height: 366px;
            }
            .home-image2 {
              width: 100%;
              height: 366px;
            }
            .home-footer {
              width: 100%;
              height: 349px;
              padding: var(--dl-space-space-unit);
              margin-bottom: 0px;
              padding-bottom: 5px;
            }
            .home-container1 {
              align-items: center;
              flex-direction: column;
            }
            .home-image3 {
              margin-bottom: 0px;
            }
            .home-links-container {
              width: 479px;
              position: relative;
              align-items: center;
              flex-direction: column;
            }
            .home-container2 {
              top: 0px;
              left: 9px;
              width: 462px;
              position: relative;
              margin-right: 0px;
            }
            .home-text {
              font-weight: 700;
            }
            .home-product-container1 {
              top: 19px;
              left: 186px;
              width: 134px;
              height: 132px;
              position: absolute;
            }
            .home-text13 {
              left: -12px;
              bottom: -62px;
              position: absolute;
            }
            .home-text14 {
              left: -13px;
              bottom: -100px;
            }
            .home-container3 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              align-items: flex-start;
              margin-bottom: 0px;
            }
            .home-text18 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
