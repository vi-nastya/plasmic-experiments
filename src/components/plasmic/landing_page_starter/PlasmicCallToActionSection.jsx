// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: vVjGbvUwkV23CBGoevYCby
// Component: oJ_cFLKk19bH
import * as React from "react"
import * as p from "@plasmicapp/react-web"
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web"
import Button from "../../Button" // plasmic-import: 8MU0F2Dvq-uK/component
import { useScreenVariants as useScreenVariantsic2XLkMdNdbp } from "./PlasmicGlobalVariant__Screen" // plasmic-import: Ic2XLkMDNdbp/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css"
import * as projectcss from "./plasmic_landing_page_starter.module.css" // plasmic-import: vVjGbvUwkV23CBGoevYCby/projectcss
import * as sty from "./PlasmicCallToActionSection.module.css" // plasmic-import: oJ_cFLKk19bH/css
import ChevronRightIcon from "./icons/PlasmicIcon__ChevronRight" // plasmic-import: hEgX6COCgvna/icon
import meeting4AR5KCmphqg from "./images/meeting.jpeg" // plasmic-import: 4a_r5KCmphqg/picture

export const PlasmicCallToActionSection__VariantProps = new Array()

export const PlasmicCallToActionSection__ArgProps = new Array(
  "image",
  "children"
)

function PlasmicCallToActionSection__RenderFunc(props) {
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
      <div className={classNames(projectcss.all, sty.freeBox__wU7G)}>
        <div
          data-plasmic-name={"art"}
          data-plasmic-override={overrides.art}
          className={classNames(projectcss.all, sty.art)}
        >
          <p.PlasmicImg
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"none"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            src={
              args.image !== undefined
                ? args.image
                : {
                    src: meeting4AR5KCmphqg,
                    fullWidth: 2916,
                    fullHeight: 1787,
                    aspectRatio: undefined,
                  }
            }
          />

          {true ? (
            <div
              data-plasmic-name={"blend"}
              data-plasmic-override={overrides.blend}
              className={classNames(projectcss.all, sty.blend)}
            />
          ) : null}
        </div>

        <div className={classNames(projectcss.all, sty.freeBox__z2KoB)}>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__i3ToV)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"copy"}
              data-plasmic-override={overrides.copy}
              hasGap={true}
              className={classNames(projectcss.all, sty.copy)}
            >
              {p.renderPlasmicSlot({
                defaultContents: (
                  <React.Fragment>
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox___21Qj)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__gCa4T
                        )}
                      >
                        {"Welcome"}
                      </div>

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__aMs4
                        )}
                      >
                        {"Let's get going"}
                      </div>

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__lWz9L
                        )}
                      >
                        {
                          "Consectetur a adipiscing sagittis sed proin libero himenaeos ornare adipiscing suscipit leo vestibulum facilisi consequat nisi nisi adipiscing habitant facilisis suspendisse hac integer eget quam facilisis sem placerat fames."
                        }
                      </div>
                    </p.Stack>

                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__apTn)}
                    >
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__ldaDk
                        )}
                        color={"blue"}
                        endIcon={
                          <ChevronRightIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__ihvu
                            )}
                            role={"img"}
                          />
                        }
                        showEndIcon={"showEndIcon"}
                      >
                        {"Start now"}
                      </Button>

                      <Button
                        bgDifference={"bgDifference"}
                        className={classNames(
                          "__wab_instance",
                          sty.button___0XZzz
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___2Hmsk
                          )}
                        >
                          {"Learn more???"}
                        </div>
                      </Button>
                    </p.Stack>
                  </React.Fragment>
                ),

                value: args.children,
              })}
            </p.Stack>
          </p.Stack>
        </div>
      </div>
    </p.Stack>
  )
}

const PlasmicDescendants = {
  root: ["root", "art", "img", "blend", "copy"],
  art: ["art", "img", "blend"],
  img: ["img"],
  blend: ["blend"],
  copy: ["copy"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCallToActionSection__ArgProps,
      internalVariantPropNames: PlasmicCallToActionSection__VariantProps,
    })

    const { dataFetches } = props
    return PlasmicCallToActionSection__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicCallToActionSection"
  } else {
    func.displayName = `PlasmicCallToActionSection.${nodeName}`
  }
  return func
}

export const PlasmicCallToActionSection = Object.assign(
  // Top-level PlasmicCallToActionSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    art: makeNodeComponent("art"),
    img: makeNodeComponent("img"),
    blend: makeNodeComponent("blend"),
    copy: makeNodeComponent("copy"),
    // Metadata about props expected for PlasmicCallToActionSection
    internalVariantProps: PlasmicCallToActionSection__VariantProps,
    internalArgProps: PlasmicCallToActionSection__ArgProps,
  }
)

export default PlasmicCallToActionSection
/* prettier-ignore-end */
