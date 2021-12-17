import React from "react"
import {
  PlasmicComponent,
  PlasmicRootProvider,
  initPlasmicLoader,
} from "@plasmicapp/loader-gatsby"
import { graphql } from "gatsby"

// Statically fetch the data needed to render Plasmic pages or components.
// You can pass in multiple page paths or component names.
export const query = graphql`
  query {
    plasmicOptions
  }
`

// Render the page or component from Plasmic.
const MyPage = ({ data }) => {
  const { plasmicOptions } = data
  return (
    <PlasmicRootProvider loader={initPlasmicLoader(plasmicOptions)}>
      <PlasmicComponent
        component={"ValueProp"}
        componentProps={{
          title: "test card text",
          description: "test",
          "Flat Icon": null,
          Vertical: true,
          "No Title": false,
          "Dark Background": true,
          Card: true,
        }}
      />
    </PlasmicRootProvider>
  )
}

export default MyPage
