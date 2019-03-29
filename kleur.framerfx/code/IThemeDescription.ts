export default interface IThemeDescription {
    name: string,
    author: string,
    base?: string,
    theme?: {
        tint?: IThemeTint
        toolbar?: IThemeToolbar
        tabContent?: IThemeTabContent
        tool?: IThemeTool
        scroller?: IThemeScroller
        canvas?: IThemeCanvas
        layerPanel?: IThemeLayerPanel
        propertyPanel?: IThemePropertyPanel
        pins?: IThemePins
        colorSwatch?: IThemeColorSwatch
        constraints?: IThemeConstraints
        sectionHeader?: IThemeSectionHeader
        search?: IThemeSearch
        focusRing?: string
        slider?: IThemeSlider
        checkbox?: IThemeCheckbox
        popOver?: IThemePopOver
        layerCreatePreview?: string
        frame?: IThemeFrame
        selectionBox?: IThemeSelectionBox
        resize?: IThemeResize
        snap?: IThemeSnap
        parentHighlight?: string
        shapeContainer?: IThemeShapeContainer
        segmentAnchor?: IThemeSegmentAnchor
        pathCurve?: IThemePathCurve
        navigationConnectionLine?: string
        textEditor?: IThemeTextEditor
        package?: IThemePackage
        component?: IThemeComponent
        error?: IThemeError
        statusBar?: IThemeStatusBar
        webFrame?: IThemeWebFrame
        tooltip?: IThemeTooltip
    }
}

export interface IRawThemeDescription extends IThemeDescription{
    colors?: {
        [key: string]: string
    },
}

export interface IThemeTint {
    tint?: string
    tintDark?: string
    tintComponent?: string
}

export interface IThemeToolbar {
    background?: string
    iconIndicator?: string
}

export interface IThemeTabContent {
    accessoryBackground?: string
    background?: string
    divider?: string
}

export interface IThemeTool {
    section?: {
        headerText?: string
    }
    accelerator?: string
    text?: string
    textActive?: string
}

export interface IThemeScroller {
    thumbBackground?: string
}

export interface IThemeCanvas {
    background?: string
}

export interface IThemeLayerPanel {
    accent?: string
    rows?: {
        odd?: string
        even?: string
        backgroundImage?: string
    }
    text?: string
    textDimmed?: string
    selection?: string
    selectionText?: string
    selectionTextDimmed?: string
    fieldPlaceholderText?: string
    componentMasterOrReplica?: string
    componentLabel?: string
    componentLabelSelected?: string
}

export interface IThemePropertyPanel {
    background?: {
        default?: string
        divider?: string
    },
    header?: {
        background?: string
        border?: string
    }
    title?: string
    label?: string
    labelInactive?: string
    divider?: string
    input?: {
        background?: string
        border?: string
        borderOverlay?: string
        borderInactive?: string
        text?: string
        textInactive?: string
        label?: string
        labelInactive?: string
    }
    button?: {
        default?: {
            background?: string
            text?: string
        }
        inactive?: {
            background?: string
            text?: string
        }
        primary?: {
            background?: string
            text?: string
            border?: string
        }
        pressed?: {
            background?: string
        }
    }
    segmentDivider?: string
}

export interface IThemePins {
    frameBorder?: string
}

export interface IThemeColorSwatch {
    border?: string
}

export interface IThemeConstraints {
    referenceFrame?: string
}

export interface IThemeSectionHeader {
    text?: string
    popUp?: string
}

export interface IThemeSearch {
    placeholder?: string
    placeholderFocused?: string
}

export interface IThemeSlider {
    knob?: {
        fill?: string
        shadow?: string
    }
    track?: {
        color?: string
        highlight?: string
        inactive?: string
    }
}

export interface IThemeCheckbox {
    background?: {
        default?: string
        pressed?: string
        checked?: string
        checkedPressed?: string
    }
    border?: {
        default?: string
        checked?: string
        checkedInner?: string
    }
    indicator?: string
}

export interface IThemePopOver {
    background?: string
    shadow?: string
    arrowBorder?: string
}

export interface IThemeFrame {
    title?: string
    outline?: string
    preview?: string
    previewOutline?: string
}

export interface IThemeSelectionBox {
    box?: string
    outline?: string
    background?: string
    componentBackground?: string
}

export interface IThemeResize {
    box?: string
    handle?: string
    handleOutline?: string
}

export interface IThemeSnap {
    line?: string
    constraint?: string
}

export interface IThemeShapeContainer {
    outline?: string
}

export interface IThemeSegmentAnchor {
    unknown?: string
    outline?: string
}

export interface IThemePathCurve {
    preview?: string
}

export interface IThemeTextEditor {
    outline?: string
}

export interface IThemePackage {
    title?: {
        text?: string
        background?: string
        border?: string
        arrow?: string
        newBadge?: {
            background?: string
            border?: string
            label?: string
        }
    }
    icon?: {
        border?: string
        background?: string
    }
}

export interface IThemeComponent {
    item?: {
        background?: string
        border?: string
        label?: string
    }
    category?: {
        label?: string
    }
    empty?: {
        header?: string
        text?: string
        inactive?: string
        active?: string
    }
}

export interface IThemeError {
    unknown?: string
    text?: string
}

export interface IThemeStatusBar {
    background?: string
    border?: string
    text?: string
    activeText?: string
    updateItemActive?: string
    errorItemActive?: string
    itemInactive?: string
}

export interface IThemeWebFrame {
    background?: string
    title?: string
    message?: string
}

export interface IThemeTooltip {
    background?: string
    color?: string
}