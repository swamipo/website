import React from 'react'
import Head from 'next/head'

import Navbar from '../components/navbar'

const Contact = (props) => {
  return (
    <>
      <div className="contact-container">
        <Head>
          <title>Contact - Planical modern template</title>
          <meta
            property="og:title"
            content="Contact - Planical modern template"
          />
        </Head>
        <Navbar rootClassName="navbar-root-class-name"></Navbar>
        <a
          href="mailto:info@psbrotherscafe.com?subject="
          className="contact-link"
        >
          <img
            alt="image"
            src="/playground_assets/contact%20us%20%20%5B1%5D-1000h.png"
            className="contact-image"
          />
        </a>
      </div>
      <style jsx>
        {`
          .contact-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .contact-link {
            display: contents;
          }
          .contact-image {
            width: 100%;
            height: 703px;
            display: flex;
            align-self: center;
            min-height: auto;
            object-fit: cover;
            padding-top: 1px;
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .contact-image {
              width: 100%;
              height: 917px;
            }
          }
          @media (max-width: 767px) {
            .contact-image {
              width: 100%;
              height: 748px;
            }
          }
          @media (max-width: 479px) {
            .contact-image {
              width: 320px;
              height: 630px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Contact
