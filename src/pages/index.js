import React from "react"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import bannerImg from "./main.png"
import "./index.css"

export default function Home() {
  return (
    <Layout description="An attempt to make neovim cli as functional as an IDE while being very beautiful, blazing fast">
      <main className="wrapper">
        <div className="container home-wrapper">
          <div className="banner__left">
            <img
              className="banner__left--logo"
              src="/img/logo.svg"
              alt="NvChad logo"
            />
            <Link
              className="button button--secondary button--lg banner__left--btn"
              to="/getting-started/setup"
            >
              Install v1.0
            </Link>
          </div>
          <div className="banner__right">
            <img
              src={bannerImg}
              className="banner__right--screenshot"
              alt="NvChad example screenshot"
            />
          </div>
        </div>
      </main>
    </Layout>
  )
}
