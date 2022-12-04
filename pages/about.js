import React from 'react'
import Head from 'next/head'

const About = (props) => {
  return (
    <>
      <div className="about-container">
        <Head>
          <title>About - Planical modern template</title>
          <meta
            property="og:title"
            content="About - Planical modern template"
          />
        </Head>
      </div>
      <style jsx>
        {`
          .about-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default About
