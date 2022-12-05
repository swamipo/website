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
        <footer className="home-footer">
          <img
            alt="logo"
            src="/playground_assets/catering-removebg-preview-2-1500h.png"
            className="home-image3"
          />
          <span className="home-text">
            Website by PSBROTHERS©2023. All Rights Reserved
          </span>
          <div className="home-icon-group"></div>
        </footer>
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
            height: 827px;
            display: flex;
            align-self: center;
            min-height: auto;
            object-fit: cover;
          }
          .home-image1 {
            width: 100%;
            height: 933px;
            display: flex;
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
            justify-content: space-between;
          }
          .home-image3 {
            height: 2rem;
            object-fit: cover;
          }
          .home-icon-group {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          @media (max-width: 991px) {
            .home-image {
              width: 100%;
              height: 760px;
            }
            .home-image1 {
              width: 100%;
              height: 842px;
              display: flex;
            }
            .home-image2 {
              width: 100%;
              height: 629px;
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
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text {
              font-size: 13px;
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .home-image {
              width: 100%;
              height: 239px;
            }
            .home-image1 {
              width: 100%;
              height: 262px;
            }
            .home-image2 {
              width: 100%;
              height: 213px;
              padding-left: 0px;
            }
            .home-footer {
              height: 205px;
              padding: var(--dl-space-space-unit);
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              flex-direction: column;
              padding-bottom: 51px;
            }
            .home-image3 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text {
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
