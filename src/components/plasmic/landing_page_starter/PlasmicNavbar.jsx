// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: vVjGbvUwkV23CBGoevYCby
// Component: tlUAxI50qyJ2
import * as React from "react"
import * as p from "@plasmicapp/react-web"
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web"
import Logo from "../../Logo" // plasmic-import: gynvKYUN6Bos/component
import Button from "../../Button" // plasmic-import: 8MU0F2Dvq-uK/component
import { useScreenVariants as useScreenVariantsic2XLkMdNdbp } from "./PlasmicGlobalVariant__Screen" // plasmic-import: Ic2XLkMDNdbp/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css"
import * as projectcss from "./plasmic_landing_page_starter.module.css" // plasmic-import: vVjGbvUwkV23CBGoevYCby/projectcss
import * as sty from "./PlasmicNavbar.module.css" // plasmic-import: tlUAxI50qyJ2/css

export const PlasmicNavbar__VariantProps = new Array()

export const PlasmicNavbar__ArgProps = new Array()

function PlasmicNavbar__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsic2XLkMdNdbp(),
  })

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__fGhKl)}
      >
        <Logo
          data-plasmic-name={"logo"}
          data-plasmic-override={overrides.logo}
          className={classNames("__wab_instance", sty.logo)}
        />

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__h5Mkt)}
        >
          <Button
            className={classNames("__wab_instance", sty.button__xw4Di)}
            color={"navLink"}
            link={"/services"}
          >
            {"Services"}
          </Button>

          <Button
            className={classNames("__wab_instance", sty.button__w6C0D)}
            color={"navLink"}
          >
            {"Features"}
          </Button>

          <Button
            className={classNames("__wab_instance", sty.button__zo44X)}
            color={"navLink"}
          >
            {"Company"}
          </Button>

          <Button
            className={classNames("__wab_instance", sty.button__mNrmR)}
            color={"navLink"}
          >
            {"Contact"}
          </Button>

          <Button
            className={classNames("__wab_instance", sty.button__bxW2)}
            color={"navLink"}
          >
            {"Log in"}
          </Button>

          <Button
            className={classNames("__wab_instance", sty.button__tOKlK)}
            color={"darkGray"}
          >
            {"Sign up"}
          </Button>
        </p.Stack>

        {false ? (
          <div className={classNames(projectcss.all, sty.freeBox__iLmGj)}>
            <button
              className={classNames(
                projectcss.button,
                projectcss.__wab_text,
                sty.button__gbiS1
              )}
            >
              {"Sign up"}
            </button>

            <Button className={classNames("__wab_instance", sty.button__rgfRt)}>
              {"Log in"}
            </Button>
          </div>
        ) : null}
      </p.Stack>
    </p.Stack>
  )
}

const PlasmicDescendants = {
  root: ["root", "logo"],
  logo: ["logo"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicNavbar__ArgProps,
      internalVariantPropNames: PlasmicNavbar__VariantProps,
    })

    const { dataFetches } = props
    return PlasmicNavbar__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbar"
  } else {
    func.displayName = `PlasmicNavbar.${nodeName}`
  }
  return func
}

export const PlasmicNavbar = Object.assign(
  // Top-level PlasmicNavbar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    logo: makeNodeComponent("logo"),
    // Metadata about props expected for PlasmicNavbar
    internalVariantProps: PlasmicNavbar__VariantProps,
    internalArgProps: PlasmicNavbar__ArgProps,
  }
)

export default PlasmicNavbar
/* prettier-ignore-end */
