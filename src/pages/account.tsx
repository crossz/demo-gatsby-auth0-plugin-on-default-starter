// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
// import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"


import { PrivateRoute, PrivateRouteComponent } from "gatsby-theme-auth0-ts"
import { Router} from "@reach/router"





const Home: PrivateRouteComponent = ({ user }) => {
    return <p>Hi, {user.profile.nickname ? user.profile.nickname : "friend"}!</p>
}

const Account = () => {
    return (
      <Layout>
        test router
        <Router>
          <PrivateRoute component={Home} path="/account" />
          {/* ET CETERA */}
          {/* <PrivateRoute component={Settings} path="/account/settings" /> */}
        </Router>
      </Layout>
    )
  }


export default Account
