import {
  setFramerPropertyArray,
  setFramerProperty,
  resetFramerPropertyArray,
  resetFramerProperty
} from "../utils"
import {xint} from "../xint"
import {
  IThemeTint,
  IThemeToolbar,
  IThemeTabContent,
  IThemeTool,
  IThemeScroller,
  IThemeCanvas,
  IThemeLayerPanel,
  IThemePropertyPanel,
  IThemePins,
  IThemeColorSwatch,
  IThemeConstraints,
  IThemeSectionHeader,
  IThemeSearch,
  IThemeSlider,
  IThemeCheckbox,
  IThemePopOver,
  IThemeFrame,
  IThemeSelectionBox,
  IThemeResize,
  IThemeSnap,
  IThemeShapeContainer,
  IThemeSegmentAnchor,
  IThemePathCurve,
  IThemeTextEditor,
  IThemePackage,
  IThemeComponent,
  IThemeError,
  IThemeStatusBar,
  IThemeWebFrame,
  IThemeTooltip,
  IThemeComponents
} from "../types/components"

// Todo: Move each component to individual file for better legibility.

const themeComponents: IThemeComponents = {
  tint: {
    apply: (tints?: IThemeTint) => {
      if (tints) {
        // Tint
        setFramerPropertyArray(
          [
            xint.tint,
            xint.toolTextActive,
            xint.layerPanelAccent,
            xint.layerPanelSelection,
            xint.propertyPanelButtonBorderPrimary,
            xint.focusRing,
            xint.sliderTrackHighlight,
            xint.checkboxBackgroundCheckedPressed,
            xint.checkboxBorderChecked,
            xint.checkboxBorderInnerChecked,
            xint.resizeBox,
            xint.resizeHandleOutline,
            xint.parentHighlight,
            xint.segmentAnchorOutline,
            xint.pathCurvePreview,
            xint.componentsEmptyActive,
            xint.packageTitleNewBadgeLabel,
            xint.toolbarIconIndicator
          ],
          tints.tint
        )

        // Tint (Dark)
        setFramerProperty("tintDark", tints.tintDark)

        // Component Tint
        setFramerPropertyArray(
          [xint.componentTint, xint.layerPanelMasterOrReplica],
          tints.tintComponent
        )
      }
    },
    reset: () => {
      // Tint
      resetFramerPropertyArray([
        xint.tint,
        xint.toolTextActive,
        xint.layerPanelAccent,
        xint.layerPanelSelection,
        xint.propertyPanelButtonBorderPrimary,
        xint.focusRing,
        xint.sliderTrackHighlight,
        xint.checkboxBackgroundCheckedPressed,
        xint.checkboxBorderChecked,
        xint.checkboxBorderInnerChecked,
        xint.resizeBox,
        xint.resizeHandleOutline,
        xint.parentHighlight,
        xint.segmentAnchorOutline,
        xint.pathCurvePreview,
        xint.componentsEmptyActive,
        xint.packageTitleNewBadgeLabel,
        xint.toolbarIconIndicator
      ])

      // Tint (Dark)
      resetFramerProperty("tintDark")

      // Component Tint
      resetFramerPropertyArray([
        xint.componentTint,
        xint.layerPanelMasterOrReplica
      ])
    }
  },
  toolbar: {
    apply: (toolbar?: IThemeToolbar) => {
      if (toolbar) {
        setFramerProperty(xint.toolbarBackground, toolbar.background)

        // Indicator color is broken because Framer X uses SVGs served as background images.
        setFramerProperty(xint.toolbarIconIndicator, toolbar.iconIndicator)
      }
    },
    reset: () => {
      resetFramerProperty(xint.toolbarBackground)
      resetFramerProperty(xint.toolbarIconIndicator)
    }
  },
  tabContent: {
    apply: (tabContent?: IThemeTabContent) => {
      if (tabContent) {
        setFramerProperty(xint.tabContentDivider, tabContent.divider)
        setFramerProperty(xint.tabContentBackground, tabContent.background)
        setFramerProperty(
          xint.tabContentAccessoryBackground,
          tabContent.accessoryBackground
        )
      }
    },
    reset: () => {
      resetFramerProperty(xint.tabContentDivider)
      resetFramerProperty(xint.tabContentBackground)
      resetFramerProperty(xint.tabContentAccessoryBackground)
    }
  },
  tool: {
    apply: (tool?: IThemeTool) => {
      if (tool) {
        if (tool.section) {
          setFramerProperty(xint.toolSectionHeaderText, tool.section.headerText)
        }
        setFramerProperty(xint.toolText, tool.text)
        setFramerProperty(xint.toolTextActive, tool.textActive)
        setFramerProperty(xint.toolAccelerator, tool.accelerator)
      }
    },
    reset: () => {
      resetFramerProperty(xint.toolSectionHeaderText)
      resetFramerProperty(xint.toolText)
      resetFramerProperty(xint.toolTextActive)
      resetFramerProperty(xint.toolAccelerator)
    }
  },
  scroller: {
    apply: (scroller?: IThemeScroller) => {
      if (scroller) {
        setFramerProperty(
          xint.scrollerThumbBackground,
          scroller.thumbBackground
        )
      }
    },
    reset: () => {
      resetFramerProperty(xint.scrollerThumbBackground)
    }
  },
  canvas: {
    apply: (canvas?: IThemeCanvas) => {
      if (canvas) {
        if (canvas.background) {
          document.body.style.setProperty(
            "background",
            canvas.background,
            "important"
          )
        }
      }
    },
    reset: () => {
      document.body.style.removeProperty("background")
    }
  },
  layerPanel: {
    apply: (layerPanel?: IThemeLayerPanel) => {
      if (layerPanel) {
        if (layerPanel.rows) {
          setFramerProperty(xint.layerPanelRowOdd, layerPanel.rows.odd)
          setFramerProperty(xint.layerPanelRowEven, layerPanel.rows.even)
          setFramerProperty(
            xint.layerPanelRowBackgroundImage,
            layerPanel.rows.backgroundImage
          )
        }
        setFramerProperty(xint.layerPanelAccent, layerPanel.accent)
        setFramerProperty(xint.layerPanelText, layerPanel.text)
        setFramerProperty(xint.layerPanelDimmedText, layerPanel.textDimmed)
        setFramerProperty(xint.layerPanelSelection, layerPanel.selection)
        setFramerProperty(
          xint.layerPanelSelectionText,
          layerPanel.selectionText
        )
        setFramerProperty(
          xint.layerPanelSelectionDimmedText,
          layerPanel.selectionTextDimmed
        )
        setFramerProperty(
          xint.layerPanelMasterOrReplica,
          layerPanel.componentMasterOrReplica
        )

        setFramerProperty(
          xint.layerPanelComponentLabel,
          layerPanel.componentLabel
        )
        setFramerProperty(
          xint.layerPanelComponentLabelSelected,
          layerPanel.componentLabelSelected
        )
      }
    },
    reset: () => {
      resetFramerProperty(xint.layerPanelRowOdd)
      resetFramerProperty(xint.layerPanelRowEven)
      resetFramerProperty(xint.layerPanelRowBackgroundImage)

      resetFramerProperty(xint.layerPanelAccent)
      resetFramerProperty(xint.layerPanelText)
      resetFramerProperty(xint.layerPanelDimmedText)
      resetFramerProperty(xint.layerPanelSelection)
      resetFramerProperty(xint.layerPanelSelectionText)
      resetFramerProperty(xint.layerPanelSelectionDimmedText)
      resetFramerProperty(xint.layerPanelMasterOrReplica)

      resetFramerProperty(xint.layerPanelComponentLabel)
      resetFramerProperty(xint.layerPanelComponentLabelSelected)
    }
  },
  propertyPanel: {
    apply: (propertyPanel?: IThemePropertyPanel) => {
      if (propertyPanel) {
        if (propertyPanel.background) {
          setFramerProperty(
            xint.propertyPanelBackground,
            propertyPanel.background.default
          )
          setFramerProperty(
            xint.propertyPanelBackgroundDivider,
            propertyPanel.background.divider
          )
        }
        if (propertyPanel.header) {
          setFramerProperty(
            xint.propertyPanelHeaderBackground,
            propertyPanel.header.background
          )
          setFramerProperty(
            xint.propertyPanelHeaderBorder,
            propertyPanel.header.border
          )
        }

        setFramerProperty(xint.propertyPanelTitle, propertyPanel.title)
        setFramerProperty(xint.propertyPanelLabel, propertyPanel.label)
        setFramerProperty(
          xint.propertyPanelLabelInactive,
          propertyPanel.labelInactive
        )
        setFramerProperty(xint.propertyPanelDivider, propertyPanel.divider)

        setFramerProperty(
          xint.propertyPanelSegmentDivider,
          propertyPanel.segmentDivider
        )

        if (propertyPanel.input) {
          setFramerProperty(
            xint.propertyPanelInputBackground,
            propertyPanel.input.background
          )
          setFramerProperty(
            xint.propertyPanelInputBorder,
            propertyPanel.input.border
          )
          setFramerProperty(
            xint.propertyPanelInputBorderOverlay,
            propertyPanel.input.borderOverlay
          )
          setFramerProperty(
            xint.propertyPanelInputBorderInactive,
            propertyPanel.input.borderInactive
          )

          setFramerProperty(
            xint.propertyPanelInputLabel,
            propertyPanel.input.label
          )
          setFramerProperty(
            xint.propertyPanelInputLabelInactive,
            propertyPanel.input.labelInactive
          )

          setFramerProperty(
            xint.propertyPanelInputText,
            propertyPanel.input.text
          )
          setFramerProperty(
            xint.propertyPanelInputTextInactive,
            propertyPanel.input.textInactive
          )
        }
        if (propertyPanel.button) {
          if (propertyPanel.button.default) {
            setFramerProperty(
              xint.propertyPanelButtonBackground,
              propertyPanel.button.default.background
            )
            setFramerProperty(
              xint.propertyPanelButtonText,
              propertyPanel.button.default.text
            )
          }
          if (propertyPanel.button.inactive) {
            setFramerProperty(
              xint.propertyPanelButtonBackgroundInactive,
              propertyPanel.button.inactive.background
            )
            setFramerProperty(
              xint.propertyPanelButtonTextInactive,
              propertyPanel.button.inactive.text
            )
          }
          if (propertyPanel.button.primary) {
            setFramerProperty(
              xint.propertyPanelButtonBackgroundPrimary,
              propertyPanel.button.primary.background
            )
            setFramerProperty(
              xint.propertyPanelButtonTextPrimary,
              propertyPanel.button.primary.text
            )
            setFramerProperty(
              xint.propertyPanelButtonBorderPrimary,
              propertyPanel.button.primary.border
            )
          }
          if (propertyPanel.button.pressed) {
            setFramerProperty(
              xint.propertyPanelButtonBackgroundPressed,
              propertyPanel.button.pressed.background
            )
          }
        }
      }
    },
    reset: () => {
      resetFramerProperty(xint.propertyPanelBackground)
      resetFramerProperty(xint.propertyPanelBackgroundDivider)
      resetFramerProperty(xint.propertyPanelHeaderBackground)
      resetFramerProperty(xint.propertyPanelHeaderBorder)
      resetFramerProperty(xint.propertyPanelTitle)
      resetFramerProperty(xint.propertyPanelLabel)
      resetFramerProperty(xint.propertyPanelLabelInactive)
      resetFramerProperty(xint.propertyPanelDivider)
      resetFramerProperty(xint.propertyPanelSegmentDivider)
      resetFramerProperty(xint.propertyPanelInputBackground)
      resetFramerProperty(xint.propertyPanelInputBorder)
      resetFramerProperty(xint.propertyPanelInputBorderOverlay)
      resetFramerProperty(xint.propertyPanelInputBorderInactive)
      resetFramerProperty(xint.propertyPanelInputLabel)
      resetFramerProperty(xint.propertyPanelInputLabelInactive)
      resetFramerProperty(xint.propertyPanelInputText)
      resetFramerProperty(xint.propertyPanelInputTextInactive)
      resetFramerProperty(xint.propertyPanelButtonBackground)
      resetFramerProperty(xint.propertyPanelButtonText)
      resetFramerProperty(xint.propertyPanelButtonBackgroundInactive)
      resetFramerProperty(xint.propertyPanelButtonTextInactive)
      resetFramerProperty(xint.propertyPanelButtonBackgroundPrimary)
      resetFramerProperty(xint.propertyPanelButtonTextPrimary)
      resetFramerProperty(xint.propertyPanelButtonBorderPrimary)
      resetFramerProperty(xint.propertyPanelButtonBackgroundPressed)
    }
  },
  pins: {
    apply: (pins?: IThemePins) => {
      if (pins) {
        setFramerProperty(xint.pinsFrameBorder, pins.frameBorder)
      }
    },
    reset: () => {
      resetFramerProperty(xint.pinsFrameBorder)
    }
  },
  colorSwatch: {
    apply: (colorSwatch?: IThemeColorSwatch) => {
      if (colorSwatch) {
        setFramerProperty(xint.colorSwatchBorder, colorSwatch.border)
      }
    },
    reset: () => {
      setFramerProperty(xint.colorSwatchBorder)
    }
  },
  constraints: {
    apply: (constraints?: IThemeConstraints) => {
      if (constraints) {
        setFramerProperty(
          xint.constraintsReferenceFrame,
          constraints.referenceFrame
        )
      }
    },
    reset: () => {
      resetFramerProperty(xint.constraintsReferenceFrame)
    }
  },
  sectionHeader: {
    apply: (sectionHeader?: IThemeSectionHeader) => {
      if (sectionHeader) {
        setFramerProperty(xint.sectionHeaderText, sectionHeader.text)
        setFramerProperty(xint.sectionHeaderPopUp, sectionHeader.popUp)
      }
    },
    reset: () => {
      resetFramerProperty(xint.sectionHeaderText)
      resetFramerProperty(xint.sectionHeaderPopUp)
    }
  },
  search: {
    apply: (search?: IThemeSearch) => {
      if (search) {
        setFramerProperty(xint.searchPlaceholder, search.placeholder)
        setFramerProperty(
          xint.searchPlaceholderFocused,
          search.placeholderFocused
        )
      }
    },
    reset: () => {
      resetFramerProperty(xint.searchPlaceholder)
      resetFramerProperty(xint.searchPlaceholderFocused)
    }
  },
  focusRing: {
    apply: (focusRing?: string) => {
      setFramerProperty(xint.focusRing, focusRing)
    },
    reset: () => {
      resetFramerProperty(xint.focusRing)
    }
  },
  slider: {
    apply: (slider?: IThemeSlider) => {
      if (slider) {
        if (slider.knob) {
          setFramerProperty(xint.sliderKnobFill, slider.knob.fill)
          setFramerProperty(xint.sliderKnobShadow, slider.knob.shadow)
        }
        if (slider.track) {
          setFramerProperty(xint.sliderTrack, slider.track.color)
          setFramerProperty(xint.sliderTrackHighlight, slider.track.highlight)
          setFramerProperty(xint.sliderTrackInactive, slider.track.inactive)
        }
      }
    },
    reset: () => {
      resetFramerProperty(xint.sliderKnobFill)
      resetFramerProperty(xint.sliderKnobShadow)

      resetFramerProperty(xint.sliderTrack)
      resetFramerProperty(xint.sliderTrackHighlight)
      resetFramerProperty(xint.sliderTrackInactive)
    }
  },
  checkbox: {
    apply: (checkbox?: IThemeCheckbox) => {
      if (checkbox) {
        if (checkbox.background) {
          setFramerProperty(
            xint.checkboxBackground,
            checkbox.background.default
          )
          setFramerProperty(
            xint.checkboxBackgroundPressed,
            checkbox.background.pressed
          )
          setFramerProperty(
            xint.checkboxBackgroundChecked,
            checkbox.background.checked
          )
          setFramerProperty(
            xint.checkboxBackgroundCheckedPressed,
            checkbox.background.checkedPressed
          )
        }
        if (checkbox.border) {
          setFramerProperty(xint.checkboxBorder, checkbox.border.default)
          setFramerProperty(xint.checkboxBorderChecked, checkbox.border.checked)
          setFramerProperty(
            xint.checkboxBorderInnerChecked,
            checkbox.border.checkedInner
          )
        }
        setFramerProperty(xint.checkboxIndicator, checkbox.indicator)
      }
    },
    reset: () => {
      resetFramerProperty(xint.checkboxBackground)
      resetFramerProperty(xint.checkboxBackgroundPressed)
      resetFramerProperty(xint.checkboxBackgroundChecked)
      resetFramerProperty(xint.checkboxBackgroundCheckedPressed)

      resetFramerProperty(xint.checkboxBorder)
      resetFramerProperty(xint.checkboxBorderChecked)
      resetFramerProperty(xint.checkboxBorderInnerChecked)

      resetFramerProperty(xint.checkboxIndicator)
    }
  },
  popOver: {
    apply: (popOver?: IThemePopOver) => {
      if (popOver) {
        setFramerProperty(xint.popoverBackground, popOver.background)
        setFramerProperty(xint.popoverShadow, popOver.shadow)
        setFramerProperty(xint.popoverArrowBorder, popOver.arrowBorder)
      }
    },
    reset: () => {
      resetFramerProperty(xint.popoverBackground)
      resetFramerProperty(xint.popoverShadow)
      resetFramerProperty(xint.popoverArrowBorder)
    }
  },
  layerCreatePreview: {
    apply: (layerCreatePreview?: string) => {
      setFramerProperty(xint.layerCreatePreview, layerCreatePreview)
    },
    reset: () => {
      resetFramerProperty(xint.layerCreatePreview)
    }
  },
  frame: {
    apply: (frame?: IThemeFrame) => {
      if (frame) {
        setFramerProperty(xint.frameTitle, frame.title)
        setFramerProperty(xint.frameOutline, frame.outline)
        setFramerProperty(xint.framePreview, frame.preview)
        setFramerProperty(xint.framePreviewOutline, frame.previewOutline)
      }
    },
    reset: () => {
      resetFramerProperty(xint.frameTitle)
      resetFramerProperty(xint.frameOutline)
      resetFramerProperty(xint.framePreview)
      resetFramerProperty(xint.framePreviewOutline)
    }
  },
  selectionBox: {
    apply: (selectionBox?: IThemeSelectionBox) => {
      if (selectionBox) {
        setFramerProperty(xint.selectionBox, selectionBox.box)
        setFramerProperty(xint.selectionBoxOutline, selectionBox.outline)
        setFramerProperty(xint.selectionBoxBackground, selectionBox.background)
        setFramerProperty(
          xint.selectionBoxComponentBackground,
          selectionBox.componentBackground
        )
      }
    },
    reset: () => {
      resetFramerProperty(xint.selectionBox)
      resetFramerProperty(xint.selectionBoxOutline)
      resetFramerProperty(xint.selectionBoxBackground)
      resetFramerProperty(xint.selectionBoxComponentBackground)
    }
  },
  resize: {
    apply: (resize?: IThemeResize) => {
      if (resize) {
        setFramerProperty(xint.resizeBox, resize.box)
        setFramerProperty(xint.resizeHandle, resize.handle)
        setFramerProperty(xint.resizeHandleOutline, resize.handleOutline)
      }
    },
    reset: () => {
      resetFramerProperty(xint.resizeBox)
      resetFramerProperty(xint.resizeHandle)
      resetFramerProperty(xint.resizeHandleOutline)
    }
  },
  snap: {
    apply: (snap?: IThemeSnap) => {
      if (snap) {
        setFramerProperty(xint.snapLine, snap.line)
        setFramerProperty(xint.snapConstraint, snap.constraint)
      }
    },
    reset: () => {
      resetFramerProperty(xint.snapLine)
      resetFramerProperty(xint.snapConstraint)
    }
  },
  parentHighlight: {
    apply: (parentHighlight?: string) => {
      setFramerProperty(xint.parentHighlight, parentHighlight)
    },
    reset: () => {
      resetFramerProperty(xint.parentHighlight)
    }
  },
  shapeContainer: {
    apply: (shapeContainer?: IThemeShapeContainer) => {
      if (shapeContainer) {
        setFramerProperty(xint.shapeContainerOutline, shapeContainer.outline)
      }
    },
    reset: () => {
      resetFramerProperty(xint.shapeContainerOutline)
    }
  },
  segmentAnchor: {
    apply: (segmentAnchor?: IThemeSegmentAnchor) => {
      if (segmentAnchor) {
        setFramerProperty(xint.segmentAnchor, segmentAnchor.unknown)
        setFramerProperty(xint.segmentAnchorOutline, segmentAnchor.outline)
      }
    },
    reset: () => {
      resetFramerProperty(xint.segmentAnchor)
      resetFramerProperty(xint.segmentAnchorOutline)
    }
  },
  pathCurve: {
    apply: (pathCurve?: IThemePathCurve) => {
      if (pathCurve) {
        setFramerProperty(xint.pathCurvePreview, pathCurve.preview)
      }
    },
    reset: () => {
      resetFramerProperty(xint.pathCurvePreview)
    }
  },
  navigationConnectionLine: {
    apply: (navigationConnectionLine?: string) => {
      setFramerProperty(xint.navigationConnectionLine, navigationConnectionLine)
    },
    reset: () => {
      resetFramerProperty(xint.navigationConnectionLine)
    }
  },
  textEditor: {
    apply: (textEditor?: IThemeTextEditor) => {
      if (textEditor) {
        setFramerProperty(xint.textEditorOutline, textEditor.outline)
      }
    },
    reset: () => {
      resetFramerProperty(xint.textEditorOutline)
    }
  },
  packages: {
    apply: (packages?: IThemePackage) => {
      if (packages) {
        if (packages.title) {
          setFramerProperty(xint.packageTitle, packages.title.text)
          setFramerProperty(
            xint.packageTitleBackground,
            packages.title.background
          )
          setFramerProperty(xint.packageTitleBorder, packages.title.border)
          setFramerProperty(xint.packageTitleArrow, packages.title.arrow)

          if (packages.title.newBadge) {
            setFramerProperty(
              xint.packageTitleNewBadgeLabel,
              packages.title.newBadge.label
            )
            setFramerProperty(
              xint.packageTitleNewBadgeBorder,
              packages.title.newBadge.border
            )
            setFramerProperty(
              xint.packageTitleNewBadgeBackground,
              packages.title.newBadge.background
            )
          }
        }

        if (packages.icon) {
          setFramerProperty(xint.packageIconBorder, packages.icon.border)
          setFramerProperty(
            xint.packageIconBackground,
            packages.icon.background
          )
        }
      }
    },
    reset: () => {
      resetFramerProperty(xint.packageTitle)
      resetFramerProperty(xint.packageTitleBackground)
      resetFramerProperty(xint.packageTitleBorder)
      resetFramerProperty(xint.packageTitleArrow)

      resetFramerProperty(xint.packageTitleNewBadgeLabel)
      resetFramerProperty(xint.packageTitleNewBadgeBorder)
      resetFramerProperty(xint.packageTitleNewBadgeBackground)

      resetFramerProperty(xint.packageIconBorder)
      resetFramerProperty(xint.packageIconBackground)
    }
  },
  component: {
    apply: (component?: IThemeComponent) => {
      if (component) {
        if (component.item) {
          setFramerProperty(xint.componentItemLabel, component.item.label)
          setFramerProperty(xint.componentItemBorder, component.item.border)
          setFramerProperty(
            xint.componentItemBackground,
            component.item.background
          )
        }
        if (component.category) {
          setFramerProperty(
            xint.componentCategoryLabel,
            component.category.label
          )
        }
        if (component.empty) {
          setFramerProperty(xint.componentsEmptyHeader, component.empty.header)
          setFramerProperty(xint.componentsEmptyText, component.empty.text)
          setFramerProperty(
            xint.componentsEmptyInactive,
            component.empty.inactive
          )
          setFramerProperty(xint.componentsEmptyActive, component.empty.active)
        }
      }
    },
    reset: () => {
      resetFramerProperty(xint.componentItemLabel)
      resetFramerProperty(xint.componentItemBorder)
      resetFramerProperty(xint.componentItemBackground)

      resetFramerProperty(xint.componentCategoryLabel)

      resetFramerProperty(xint.componentsEmptyHeader)
      resetFramerProperty(xint.componentsEmptyText)
      resetFramerProperty(xint.componentsEmptyInactive)
      resetFramerProperty(xint.componentsEmptyActive)
    }
  },
  error: {
    apply: (error?: IThemeError) => {
      if (error) {
        setFramerProperty(xint.error, error.unknown)
        setFramerProperty(xint.errorText, error.text)
      }
    },
    reset: () => {
      resetFramerProperty(xint.error)
      resetFramerProperty(xint.errorText)
    }
  },
  statusBar: {
    apply: (statusBar?: IThemeStatusBar) => {
      if (statusBar) {
        setFramerProperty(xint.statusBarBackground, statusBar.background)
        setFramerProperty(xint.statusBarBorder, statusBar.border)
        setFramerProperty(xint.statusBarText, statusBar.text)
        setFramerProperty(xint.statusBarActiveText, statusBar.activeText)
        setFramerProperty(
          xint.statusBarUpdateItemActive,
          statusBar.updateItemActive
        )
        setFramerProperty(
          xint.statusBarErrorItemActive,
          statusBar.errorItemActive
        )
        setFramerProperty(xint.statusBarItemInactive, statusBar.itemInactive)
      }
    },
    reset: () => {
      resetFramerProperty(xint.statusBarBackground)
      resetFramerProperty(xint.statusBarBorder)
      resetFramerProperty(xint.statusBarText)
      resetFramerProperty(xint.statusBarActiveText)
      resetFramerProperty(xint.statusBarUpdateItemActive)
      resetFramerProperty(xint.statusBarErrorItemActive)
      resetFramerProperty(xint.statusBarItemInactive)
    }
  },
  webFrame: {
    apply: (webFrame?: IThemeWebFrame) => {
      if (webFrame) {
        setFramerProperty(xint.webFrameBackground, webFrame.background)
        setFramerProperty(xint.webFrameTitle, webFrame.title)
        setFramerProperty(xint.webFrameMessage, webFrame.message)
      }
    },
    reset: () => {
      resetFramerProperty(xint.webFrameBackground)
      resetFramerProperty(xint.webFrameTitle)
      resetFramerProperty(xint.webFrameMessage)
    }
  },
  tooltip: {
    apply: (tooltip?: IThemeTooltip) => {
      if (tooltip) {
        setFramerProperty(xint.tooltipBackground, tooltip.background)
        setFramerProperty(xint.tooltipColor, tooltip.color)
      }
    },
    reset: () => {
      resetFramerProperty(xint.tooltipBackground)
      resetFramerProperty(xint.tooltipColor)
    }
  }
}

export default themeComponents
