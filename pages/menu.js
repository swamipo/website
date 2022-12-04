import React from 'react'
import Head from 'next/head'

const Menu = (props) => {
  return (
    <>
      <div className="menu-container">
        <Head>
          <title>Menu - Planical modern template</title>
          <meta property="og:title" content="Menu - Planical modern template" />
        </Head>
      </div>
      <style jsx>
        {`
          .menu-container {
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

export default Menu
