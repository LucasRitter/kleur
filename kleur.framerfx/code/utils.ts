// Todo: Add more comments to describe what is going on inside my head.

import IThemeDescription, {
    IRawThemeDescription,
    IThemeLayerPanel,
    IThemeCanvas,
    IThemeScroller,
    IThemeTool,
    IThemeTabContent,
    IThemeToolbar,
    IThemeTint,
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
} from "./IThemeDescription"

// xint stands for "framer X INTernal properties"
const xint = {
    layerPanelRowBackgroundImage: "layerPanelRowBackgroundImage",
    tint: "tint",
    tintDark: "tintDark",
    componentTint: "componentTint",
    toolbarBackground: "toolbarBackground",
    toolbarIconIndicator: "toolbarIconIndicator",
    tabContentBackground: "tabContentBackground",
    tabContentAccessoryBackground: "tabContentAccessoryBackground",
    tabContentDivider: "tabContentDivider",
    toolSectionHeaderText: "toolSectionHeaderText",
    toolText: "toolText",
    toolTextActive: "toolTextActive",
    toolAccelerator: "toolAccelerator",
    scrollerThumbBackground: "scrollerThumbBackground",
    canvasBackground: "canvasBackground",
    layerPanelRowOdd: "layerPanelRowOdd",
    layerPanelRowEven: "layerPanelRowEven",
    layerPanelAccent: "layerPanelAccent",
    layerPanelText: "layerPanelText",
    layerPanelDimmedText: "layerPanelDimmedText",
    layerPanelSelection: "layerPanelSelection",
    layerPanelSelectionText: "layerPanelSelectionText",
    layerPanelSelectionDimmedText: "layerPanelSelectionDimmedText",
    layerPanelFieldPlaceholderText: "layerPanelFieldPlaceholderText",
    layerPanelMasterOrReplica: "layerPanelMasterOrReplica",
    layerPanelComponentLabel: "layerPanelComponentLabel",
    layerPanelComponentLabelSelected: "layerPanelComponentLabelSelected",
    propertyPanelHeaderBackground: "propertyPanelHeaderBackground",
    propertyPanelBackground: "propertyPanelBackground",
    propertyPanelBackgroundDivider: "propertyPanelBackgroundDivider",
    propertyPanelTitle: "propertyPanelTitle",
    propertyPanelLabel: "propertyPanelLabel",
    propertyPanelLabelInactive: "propertyPanelLabelInactive",
    propertyPanelDivider: "propertyPanelDivider",
    propertyPanelInputBackground: "propertyPanelInputBackground",
    propertyPanelInputBorder: "propertyPanelInputBorder",
    propertyPanelInputBorderOverlay: "propertyPanelInputBorderOverlay",
    propertyPanelInputBorderInactive: "propertyPanelInputBorderInactive",
    propertyPanelInputText: "propertyPanelInputText",
    propertyPanelInputTextInactive: "propertyPanelInputTextInactive",
    propertyPanelInputLabel: "propertyPanelInputLabel",
    propertyPanelInputLabelInactive: "propertyPanelInputLabelInactive",
    propertyPanelButtonBorderPrimary: "propertyPanelButtonBorderPrimary",
    propertyPanelButtonBackground: "propertyPanelButtonBackground",
    propertyPanelButtonBackgroundInactive:
        "propertyPanelButtonBackgroundInactive",
    propertyPanelButtonBackgroundPrimary:
        "propertyPanelButtonBackgroundPrimary",
    propertyPanelButtonBackgroundPressed:
        "propertyPanelButtonBackgroundPressed",
    propertyPanelButtonText: "propertyPanelButtonText",
    propertyPanelButtonTextInactive: "propertyPanelButtonTextInactive",
    propertyPanelButtonTextPrimary: "propertyPanelButtonTextPrimary",
    propertyPanelSegmentDivider: "propertyPanelSegmentDivider",
    propertyPanelHeaderBorder: "propertyPanelHeaderBorder",
    pinsFrameBorder: "pinsFrameBorder",
    colorSwatchBorder: "colorSwatchBorder",
    constraintsReferenceFrame: "constraintsReferenceFrame",
    sectionHeaderText: "sectionHeaderText",
    sectionHeaderPopUp: "sectionHeaderPopUp",
    searchPlaceholder: "searchPlaceholder",
    searchPlaceholderFocused: "searchPlaceholderFocused",
    focusRing: "focusRing",
    sliderKnobFill: "sliderKnobFill",
    sliderKnobShadow: "sliderKnobShadow",
    sliderTrack: "sliderTrack",
    sliderTrackHighlight: "sliderTrackHighlight",
    sliderTrackInactive: "sliderTrackInactive",
    checkboxBackground: "checkboxBackground",
    checkboxBackgroundPressed: "checkboxBackgroundPressed",
    checkboxBackgroundChecked: "checkboxBackgroundChecked",
    checkboxBackgroundCheckedPressed: "checkboxBackgroundCheckedPressed",
    checkboxBorder: "checkboxBorder",
    checkboxBorderChecked: "checkboxBorderChecked",
    checkboxIndicator: "checkboxIndicator",
    checkboxBorderInnerChecked: "checkboxBorderInnerChecked",
    popoverBackground: "popoverBackground",
    popoverShadow: "popoverShadow",
    popoverArrowBorder: "popoverArrowBorder",
    layerCreatePreview: "layerCreatePreview",
    frameTitle: "frameTitle",
    frameOutline: "frameOutline",
    framePreview: "framePreview",
    framePreviewOutline: "framePreviewOutline",
    selectionBox: "selectionBox",
    selectionBoxOutline: "selectionBoxOutline",
    selectionBoxBackground: "selectionBoxBackground",
    selectionBoxComponentBackground: "selectionBoxComponentBackground",
    resizeBox: "resizeBox",
    resizeHandle: "resizeHandle",
    resizeHandleOutline: "resizeHandleOutline",
    snapLine: "snapLine",
    snapConstraint: "snapConstraint",
    parentHighlight: "parentHighlight",
    shapeContainerOutline: "shapeContainerOutline",
    segmentAnchor: "segmentAnchor",
    segmentAnchorOutline: "segmentAnchorOutline",
    pathCurvePreview: "pathCurvePreview",
    navigationConnectionLine: "navigationConnectionLine",
    textEditorOutline: "textEditorOutline",
    packageTitle: "packageTitle",
    packageTitleBackground: "packageTitleBackground",
    packageTitleBorder: "packageTitleBorder",
    packageTitleArrow: "packageTitleArrow",
    packageIconBorder: "packageIconBorder",
    packageIconBackground: "packageIconBackground",
    packageTitleNewBadgeBackground: "packageTitleNewBadgeBackground",
    packageTitleNewBadgeBorder: "packageTitleNewBadgeBorder",
    packageTitleNewBadgeLabel: "packageTitleNewBadgeLabel",
    componentItemBackground: "componentItemBackground",
    componentItemBorder: "componentItemBorder",
    componentItemLabel: "componentItemLabel",
    componentCategoryLabel: "componentCategoryLabel",
    componentsEmptyHeader: "componentsEmptyHeader",
    componentsEmptyText: "componentsEmptyText",
    componentsEmptyInactive: "componentsEmptyInactive",
    componentsEmptyActive: "componentsEmptyActive",
    error: "error",
    errorText: "errorText",
    statusBarBackground: "statusBarBackground",
    statusBarBorder: "statusBarBorder",
    statusBarText: "statusBarText",
    statusBarActiveText: "statusBarActiveText",
    statusBarUpdateItemActive: "statusBarUpdateItemActive",
    statusBarErrorItemActive: "statusBarErrorItemActive",
    statusBarItemInactive: "statusBarItemInactive",
    webFrameBackground: "webFrameBackground",
    webFrameTitle: "webFrameTitle",
    webFrameMessage: "webFrameMessage",
    tooltipBackground: "tooltipBackground",
    tooltipColor: "tooltipColor",
}

const tints = {
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
                    xint.toolbarIconIndicator,
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
        setFramerPropertyArray([
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
            xint.toolbarIconIndicator,
        ])

        // Tint (Dark)
        setFramerProperty("tintDark")

        // Component Tint
        setFramerPropertyArray([
            xint.componentTint,
            xint.layerPanelMasterOrReplica,
        ])
    },
}

const toolbar = {
    apply: (toolbar?: IThemeToolbar) => {
        if (toolbar) {
            setFramerProperty(xint.toolbarBackground, toolbar.background)

            // Indicator color is broken because Framer X uses SVGs served as background images.
            setFramerProperty(xint.toolbarIconIndicator, toolbar.iconIndicator)
        }
    },
    reset: () => {
        setFramerProperty(xint.toolbarBackground)
        setFramerProperty(xint.toolbarIconIndicator)
    },
}

const tabContent = {
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
        setFramerProperty(xint.tabContentDivider)
        setFramerProperty(xint.tabContentBackground)
        setFramerProperty(xint.tabContentAccessoryBackground)
    },
}

const tool = {
    apply: (tool?: IThemeTool) => {
        if (tool) {
            if (tool.section) {
                setFramerProperty(
                    xint.toolSectionHeaderText,
                    tool.section.headerText
                )
            }
            setFramerProperty(xint.toolText, tool.text)
            setFramerProperty(xint.toolTextActive, tool.textActive)
            setFramerProperty(xint.toolAccelerator, tool.accelerator)
        }
    },
    reset: () => {
        setFramerProperty(xint.toolSectionHeaderText)
        setFramerProperty(xint.toolText)
        setFramerProperty(xint.toolTextActive)
        setFramerProperty(xint.toolAccelerator)
    },
}

const scroller = {
    apply: (scroller?: IThemeScroller) => {
        if (scroller) {
            setFramerProperty(
                xint.scrollerThumbBackground,
                scroller.thumbBackground
            )
        }
    },
    reset: () => {
        setFramerProperty(xint.scrollerThumbBackground)
    },
}

const canvas = {
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
    },
}

const layerPanel = {
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
        setFramerProperty(xint.layerPanelRowOdd)
        setFramerProperty(xint.layerPanelRowEven)
        setFramerProperty(xint.layerPanelRowBackgroundImage)

        setFramerProperty(xint.layerPanelAccent)
        setFramerProperty(xint.layerPanelText)
        setFramerProperty(xint.layerPanelDimmedText)
        setFramerProperty(xint.layerPanelSelection)
        setFramerProperty(xint.layerPanelSelectionText)
        setFramerProperty(xint.layerPanelSelectionDimmedText)
        setFramerProperty(xint.layerPanelMasterOrReplica)

        setFramerProperty(xint.layerPanelComponentLabel)
        setFramerProperty(xint.layerPanelComponentLabelSelected)
    },
}

const propertyPanel = {
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
        setFramerProperty(xint.propertyPanelBackground)
        setFramerProperty(xint.propertyPanelBackgroundDivider)
        setFramerProperty(xint.propertyPanelHeaderBackground)
        setFramerProperty(xint.propertyPanelHeaderBorder)
        setFramerProperty(xint.propertyPanelTitle)
        setFramerProperty(xint.propertyPanelLabel)
        setFramerProperty(xint.propertyPanelLabelInactive)
        setFramerProperty(xint.propertyPanelDivider)
        setFramerProperty(xint.propertyPanelSegmentDivider)
        setFramerProperty(xint.propertyPanelInputBackground)
        setFramerProperty(xint.propertyPanelInputBorder)
        setFramerProperty(xint.propertyPanelInputBorderOverlay)
        setFramerProperty(xint.propertyPanelInputBorderInactive)
        setFramerProperty(xint.propertyPanelInputLabel)
        setFramerProperty(xint.propertyPanelInputLabelInactive)
        setFramerProperty(xint.propertyPanelInputText)
        setFramerProperty(xint.propertyPanelInputTextInactive)
        setFramerProperty(xint.propertyPanelButtonBackground)
        setFramerProperty(xint.propertyPanelButtonText)
        setFramerProperty(xint.propertyPanelButtonBackgroundInactive)
        setFramerProperty(xint.propertyPanelButtonTextInactive)
        setFramerProperty(xint.propertyPanelButtonBackgroundPrimary)
        setFramerProperty(xint.propertyPanelButtonTextPrimary)
        setFramerProperty(xint.propertyPanelButtonBorderPrimary)
        setFramerProperty(xint.propertyPanelButtonBackgroundPressed)
    },
}

const pins = {
    apply: (pins?: IThemePins) => {
        if (pins) {
            setFramerProperty(xint.pinsFrameBorder, pins.frameBorder)
        }
    },
    reset: () => {
        setFramerProperty(xint.pinsFrameBorder)
    },
}

const colorSwatch = {
    apply: (colorSwatch?: IThemeColorSwatch) => {
        if (colorSwatch) {
            setFramerProperty(xint.colorSwatchBorder, colorSwatch.border)
        }
    },
    reset: () => {
        setFramerProperty(xint.colorSwatchBorder)
    },
}

const constraints = {
    apply: (constraints?: IThemeConstraints) => {
        if (constraints) {
            setFramerProperty(
                xint.constraintsReferenceFrame,
                constraints.referenceFrame
            )
        }
    },
    reset: () => {
        setFramerProperty(xint.constraintsReferenceFrame)
    },
}

const sectionHeader = {
    apply: (sectionHeader?: IThemeSectionHeader) => {
        if (sectionHeader) {
            setFramerProperty(xint.sectionHeaderText, sectionHeader.text)
            setFramerProperty(xint.sectionHeaderPopUp, sectionHeader.popUp)
        }
    },
    reset: () => {
        setFramerProperty(xint.sectionHeaderText)
        setFramerProperty(xint.sectionHeaderPopUp)
    },
}

const search = {
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
        setFramerProperty(xint.searchPlaceholder)
        setFramerProperty(xint.searchPlaceholderFocused)
    },
}

const focusRing = {
    apply: (focusRing?: string) => {
        setFramerProperty(xint.focusRing, focusRing)
    },
    reset: () => {
        setFramerProperty(xint.focusRing)
    },
}

const slider = {
    apply: (slider?: IThemeSlider) => {
        if (slider) {
            if (slider.knob) {
                setFramerProperty(xint.sliderKnobFill, slider.knob.fill)
                setFramerProperty(xint.sliderKnobShadow, slider.knob.shadow)
            }
            if (slider.track) {
                setFramerProperty(xint.sliderTrack, slider.track.color)
                setFramerProperty(
                    xint.sliderTrackHighlight,
                    slider.track.highlight
                )
                setFramerProperty(
                    xint.sliderTrackInactive,
                    slider.track.inactive
                )
            }
        }
    },
    reset: () => {
        setFramerProperty(xint.sliderKnobFill)
        setFramerProperty(xint.sliderKnobShadow)

        setFramerProperty(xint.sliderTrack)
        setFramerProperty(xint.sliderTrackHighlight)
        setFramerProperty(xint.sliderTrackInactive)
    },
}

const checkbox = {
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
                setFramerProperty(
                    xint.checkboxBorderChecked,
                    checkbox.border.checked
                )
                setFramerProperty(
                    xint.checkboxBorderInnerChecked,
                    checkbox.border.checkedInner
                )
            }
            setFramerProperty(xint.checkboxIndicator, checkbox.indicator)
        }
    },
    reset: () => {
        setFramerProperty(xint.checkboxBackground)
        setFramerProperty(xint.checkboxBackgroundPressed)
        setFramerProperty(xint.checkboxBackgroundChecked)
        setFramerProperty(xint.checkboxBackgroundCheckedPressed)

        setFramerProperty(xint.checkboxBorder)
        setFramerProperty(xint.checkboxBorderChecked)
        setFramerProperty(xint.checkboxBorderInnerChecked)

        setFramerProperty(xint.checkboxIndicator)
    },
}

const popOver = {
    apply: (popOver?: IThemePopOver) => {
        if (popOver) {
            setFramerProperty(xint.popoverBackground, popOver.background)
            setFramerProperty(xint.popoverShadow, popOver.shadow)
            setFramerProperty(xint.popoverArrowBorder, popOver.arrowBorder)
        }
    },
    reset: () => {
        setFramerProperty(xint.popoverBackground)
        setFramerProperty(xint.popoverShadow)
        setFramerProperty(xint.popoverArrowBorder)
    },
}

const layerCreatePreview = {
    apply: (layerCreatePreview?: string) => {
        setFramerProperty(xint.layerCreatePreview, layerCreatePreview)
    },
    reset: () => {
        setFramerProperty(xint.layerCreatePreview)
    },
}

const frame = {
    apply: (frame?: IThemeFrame) => {
        if (frame) {
            setFramerProperty(xint.frameTitle, frame.title)
            setFramerProperty(xint.frameOutline, frame.outline)
            setFramerProperty(xint.framePreview, frame.preview)
            setFramerProperty(xint.framePreviewOutline, frame.previewOutline)
        }
    },
    reset: () => {
        setFramerProperty(xint.frameTitle)
        setFramerProperty(xint.frameOutline)
        setFramerProperty(xint.framePreview)
        setFramerProperty(xint.framePreviewOutline)
    },
}

const selectionBox = {
    apply: (selectionBox?: IThemeSelectionBox) => {
        if (selectionBox) {
            setFramerProperty(xint.selectionBox, selectionBox.box)
            setFramerProperty(xint.selectionBoxOutline, selectionBox.outline)
            setFramerProperty(xint.selectionBoxBackground, selectionBox.background)
            setFramerProperty(xint.selectionBoxComponentBackground, selectionBox.componentBackground)
        }
    },
    reset: () => {
        setFramerProperty(xint.selectionBox)
        setFramerProperty(xint.selectionBoxOutline)
        setFramerProperty(xint.selectionBoxBackground)
        setFramerProperty(xint.selectionBoxComponentBackground)
    },
}

const resize = {
    apply: (resize?: IThemeResize) => {
        if (resize) {
            setFramerProperty(xint.resizeBox, resize.box)
            setFramerProperty(xint.resizeHandle, resize.handle)
            setFramerProperty(xint.resizeHandleOutline, resize.handleOutline)
                    }
    },
    reset: () => {
        setFramerProperty(xint.resizeBox)
        setFramerProperty(xint.resizeHandle)
        setFramerProperty(xint.resizeHandleOutline)
    },
}

const snap = {
    apply: (snap?: IThemeSnap) => {
        if (snap) {
            setFramerProperty(xint.snapLine, snap.line)
            setFramerProperty(xint.snapConstraint, snap.constraint)
        }
    },
    reset: () => {
        setFramerProperty(xint.snapLine)
        setFramerProperty(xint.snapConstraint)
    },
}

const parentHighlight = {
    apply: (parentHighlight?: string) => {
        setFramerProperty(xint.parentHighlight, parentHighlight)
    },
    reset: () => {
        setFramerProperty(xint.parentHighlight)
    },
}

const shapeContainer = {
    apply: (shapeContainer?: IThemeShapeContainer) => {
        if (shapeContainer) {
            setFramerProperty(xint.shapeContainerOutline, shapeContainer.outline)
        }
    },
    reset: () => {
        setFramerProperty(xint.shapeContainerOutline)
    },
}

const segmentAnchor = {
    apply: (segmentAnchor?: IThemeSegmentAnchor) => {
        if (segmentAnchor) {
            setFramerProperty(xint.segmentAnchor, segmentAnchor.unknown)
            setFramerProperty(xint.segmentAnchorOutline, segmentAnchor.outline)
        }
    },
    reset: () => {
        setFramerProperty(xint.segmentAnchor)
        setFramerProperty(xint.segmentAnchorOutline)
    },
}

const pathCurve = {
    apply: (pathCurve?: IThemePathCurve) => {
        if (pathCurve) {
            setFramerProperty(xint.pathCurvePreview, pathCurve.preview)
        }
    },
    reset: () => {
        setFramerProperty(xint.pathCurvePreview)
    },
}

const navigationConnectionLine = {
    apply: (navigationConnectionLine?: string) => {
        setFramerProperty(xint.navigationConnectionLine, navigationConnectionLine)
    },
    reset: () => {
        setFramerProperty(xint.navigationConnectionLine)
    },
}

const textEditor = {
    apply: (textEditor?: IThemeTextEditor) => {
        if (textEditor) {
            setFramerProperty(xint.textEditorOutline, textEditor.outline)
        }
    },
    reset: () => {
        setFramerProperty(xint.textEditorOutline)
    },
}

const packages = {
    apply: (packages?: IThemePackage) => {
        if (packages) {
            if (packages.title) {
                setFramerProperty(xint.packageTitle, packages.title.text)
                setFramerProperty(xint.packageTitleBackground, packages.title.background)
                setFramerProperty(xint.packageTitleBorder, packages.title.border)
                setFramerProperty(xint.packageTitleArrow, packages.title.arrow)

                if (packages.title.newBadge) {
                    setFramerProperty(xint.packageTitleNewBadgeLabel, packages.title.newBadge.label)
                    setFramerProperty(xint.packageTitleNewBadgeBorder, packages.title.newBadge.border)
                    setFramerProperty(xint.packageTitleNewBadgeBackground, packages.title.newBadge.background)
                }
            }
            
            if (packages.icon) {
                setFramerProperty(xint.packageIconBorder, packages.icon.border)
                setFramerProperty(xint.packageIconBackground, packages.icon.background)
            }
        }
    },
    reset: () => {
        setFramerProperty(xint.packageTitle)
        setFramerProperty(xint.packageTitleBackground)
        setFramerProperty(xint.packageTitleBorder)
        setFramerProperty(xint.packageTitleArrow)

        setFramerProperty(xint.packageTitleNewBadgeLabel)
        setFramerProperty(xint.packageTitleNewBadgeBorder)
        setFramerProperty(xint.packageTitleNewBadgeBackground)

        setFramerProperty(xint.packageIconBorder)
        setFramerProperty(xint.packageIconBackground)
    },
}

const component = {
    apply: (component?: IThemeComponent) => {
        if (component) {
            if (component.item) {
                setFramerProperty(xint.componentItemLabel, component.item.label)
                setFramerProperty(xint.componentItemBorder, component.item.border)
                setFramerProperty(xint.componentItemBackground, component.item.background)
            }
            if (component.category) {
                setFramerProperty(xint.componentCategoryLabel, component.category.label)
            }
            if (component.empty) {
                setFramerProperty(xint.componentsEmptyHeader, component.empty.header)
                setFramerProperty(xint.componentsEmptyText, component.empty.text)
                setFramerProperty(xint.componentsEmptyInactive, component.empty.inactive)
                setFramerProperty(xint.componentsEmptyActive, component.empty.active)
            }
        }
    },
    reset: () => {
        setFramerProperty(xint.componentItemLabel)
        setFramerProperty(xint.componentItemBorder)
        setFramerProperty(xint.componentItemBackground)

        setFramerProperty(xint.componentCategoryLabel)

        setFramerProperty(xint.componentsEmptyHeader)
        setFramerProperty(xint.componentsEmptyText)
        setFramerProperty(xint.componentsEmptyInactive)
        setFramerProperty(xint.componentsEmptyActive)
    },
}

const error = {
    apply: (error?: IThemeError) => {
        if (error) {
            setFramerProperty(xint.error, error.unknown)
            setFramerProperty(xint.errorText, error.text)
        }
    },
    reset: () => {},
}

const statusBar = {
    apply: (statusBar?: IThemeStatusBar) => {
        if (statusBar) {
            setFramerProperty(xint.statusBarBackground, statusBar.background)
            setFramerProperty(xint.statusBarBorder, statusBar.border)
            setFramerProperty(xint.statusBarText, statusBar.text)
            setFramerProperty(xint.statusBarActiveText, statusBar.activeText)
            setFramerProperty(xint.statusBarUpdateItemActive, statusBar.updateItemActive)
            setFramerProperty(xint.statusBarErrorItemActive, statusBar.errorItemActive)
            setFramerProperty(xint.statusBarItemInactive, statusBar.itemInactive)
        }
    },
    reset: () => {
        setFramerProperty(xint.statusBarBackground)
        setFramerProperty(xint.statusBarBorder)
        setFramerProperty(xint.statusBarText)
        setFramerProperty(xint.statusBarActiveText)
        setFramerProperty(xint.statusBarUpdateItemActive)
        setFramerProperty(xint.statusBarErrorItemActive)
        setFramerProperty(xint.statusBarItemInactive)
    },
}

const webFrame = {
    apply: (webFrame?: IThemeWebFrame) => {
        if (webFrame) {
            setFramerProperty(xint.webFrameBackground, webFrame.background)
            setFramerProperty(xint.webFrameTitle, webFrame.title)
            setFramerProperty(xint.webFrameMessage, webFrame.message)
        }
    },
    reset: () => {
        setFramerProperty(xint.webFrameBackground)
        setFramerProperty(xint.webFrameTitle)
        setFramerProperty(xint.webFrameMessage)
    },
}

const tooltip = {
    apply: (tooltip?: IThemeTooltip) => {
        if (tooltip) {
            setFramerProperty(xint.tooltipBackground, tooltip.background)
            setFramerProperty(xint.tooltipColor, tooltip.color)
        }
    },
    reset: () => {
        setFramerProperty(xint.tooltipBackground)
        setFramerProperty(xint.tooltipColor)
    },
}

const setFramerProperty = (key: string, value?: string) => {
    if (value)
        document.documentElement.style.setProperty(
            `--framerInternalUI-${key}`,
            value,
            "important"
        )
    else
        document.documentElement.style.removeProperty(`--framerInternalUI-${key}`)
}
const setFramerPropertyArray = (keys: string[], value?: string) => {
    for (let key of keys) {
        setFramerProperty(key, value)
    }
}


const applyColors = (rawTheme: IRawThemeDescription): IThemeDescription => {

    let theme: IThemeDescription = {
        name: rawTheme.name ? rawTheme.name : "Theme Name",
        author: rawTheme.author ? rawTheme.author : "Author",
        theme: recursiveApplyColors(rawTheme.theme, rawTheme),
    }

    return theme
}

const recursiveApplyColors = (
    obj: object,
    rawTheme: IRawThemeDescription
): any => {
    let retObj = {}

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === "object") {
                retObj[key] = recursiveApplyColors(obj[key], rawTheme)
            } else if (typeof obj[key] === "string") {
                if (obj[key].startsWith("$")) {
                    let color: string

                    if (rawTheme.colors) {
                        let colIndex = obj[key].substr(1)
                        if (rawTheme.colors.hasOwnProperty(colIndex)) {
                            color = rawTheme.colors[colIndex]
                        }
                    }

                    if (!color) {
                        color = "#FF0000"
                    }

                    retObj[key] = color
                } else {
                    retObj[key] = obj[key]
                }
            }
        }
    }

    return retObj
}

export const applyTheme = (raw: string): [boolean, IThemeDescription] => {
    try {
        if (raw.startsWith("<")) {
            return [false, undefined];
        }
        // Load raw theme from string.
        let rawLoadedTheme = <IRawThemeDescription>JSON.parse(raw)

        // Apply colors.
        let theme = applyColors(rawLoadedTheme)

        tints.apply(theme.theme.tint)
        toolbar.apply(theme.theme.toolbar)
        tabContent.apply(theme.theme.tabContent)
        tool.apply(theme.theme.tool)
        scroller.apply(theme.theme.scroller)
        canvas.apply(theme.theme.canvas)
        layerPanel.apply(theme.theme.layerPanel)
        propertyPanel.apply(theme.theme.propertyPanel)
        pins.apply(theme.theme.pins)
        colorSwatch.apply(theme.theme.colorSwatch)
        constraints.apply(theme.theme.constraints)
        sectionHeader.apply(theme.theme.sectionHeader)
        search.apply(theme.theme.search)
        focusRing.apply(theme.theme.focusRing)
        slider.apply(theme.theme.slider)
        checkbox.apply(theme.theme.checkbox)
        popOver.apply(theme.theme.popOver)
        layerCreatePreview.apply(theme.theme.layerCreatePreview)
        frame.apply(theme.theme.frame)
        selectionBox.apply(theme.theme.selectionBox)
        resize.apply(theme.theme.resize)
        snap.apply(theme.theme.snap)
        parentHighlight.apply(theme.theme.parentHighlight)
        shapeContainer.apply(theme.theme.shapeContainer)
        segmentAnchor.apply(theme.theme.segmentAnchor)
        pathCurve.apply(theme.theme.pathCurve)
        navigationConnectionLine.apply(theme.theme.navigationConnectionLine)
        textEditor.apply(theme.theme.textEditor)
        packages.apply(theme.theme.package)
        component.apply(theme.theme.component)
        error.apply(theme.theme.error)
        statusBar.apply(theme.theme.statusBar)
        webFrame.apply(theme.theme.webFrame)
        tooltip.apply(theme.theme.tooltip)

        return [true, theme]
    } catch (e) {
        console.warn(e)
        resetTheme()
        canvas.reset()
        return [false, undefined]
    }
}

export const resetTheme = () => {
    for (let key in xint) {
        setFramerProperty(key)
    }
    canvas.reset()
}
