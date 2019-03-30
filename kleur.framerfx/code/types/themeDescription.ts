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
  IThemeTooltip
} from "./components"

export interface IThemeDescription {
  name: string
  author: string
  base?: string
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

export interface IRawThemeDescription extends IThemeDescription {
  colors?: {
    [key: string]: string
  }
}
