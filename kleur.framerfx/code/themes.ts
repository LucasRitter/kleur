import IThemeDescription, { IRawThemeDescription } from "./IThemeDescription";

/*export const lightTheme: IRawThemeDescription = {
    name: "Framer X",
    author: "Framer B.V",
    colors: {
        white: "#FFFFFF",
        black: "#000000",
        blue: "#0099FF",
        blueDarkened: "#0088EE",
        blueDarkened2: "#4197F7",
        blueBrightened: "#44BBFF",
        purple: "#8855FF",
        pink: "#FF5AAA",
        yellow: "#FFD700"
    },
    theme: {
        tint: {
            tint: "$framerBlue",
            tintDark: "$blueDarkened",
            tintComponent: "$purple"
        },
        toolbar: {
            background: "$white",
            iconIndicator: "$blue"
        },
        tabContent: {
            divider: "#DDDDDD",
            background: "#FBFBFB",
            accessoryBackground: "#FDFDFD"
        },
        tool: {
            section: {
                headerText: "#222222"
            },
            text: "#888888",
            textActive: "$blue",
            accelerator: "#BBBBBB"
        },
        scroller: {
            thumbBackground: "rgba(0, 0, 0, 0.25)"
        },
        canvas: {
            background: "#EEEEEE"
        },
        layerPanel: {
            rows: {
                odd: "rgba(251, 251, 251, 1.00)",
                even: "rgba(253, 253, 253, 1.00)",
                backgroundImage: "url(data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1' h… L 1 56 L 0 56 Z' style='fill:rgba(253, 253, 253, 1.00)'></path></g></svg>)"
            },
            accent: "$blue",
            text: "$black",
            textDimmed: "rgba(0, 0, 0, 0.5)",
            selection: "$blue",
            selectionText: "$white",
            selectionTextDimmed: "rgba(255, 255, 255, 0.5)",
            fieldPlaceholderText: "#999999",
            componentMasterOrReplica: "$purple",
            componentLabel: "#AAAAAA",
            componentLabelSelected: "rgba(255, 255, 255, 0.5)",
        },
        propertyPanel: {
            background: {
                default: "#FBFBFB",
                header: "#FDFDFD",
                divider: "#DDDDDD"
            },
            title: "#222222",
            label: "#888888",
            labelInactive: "#CCCCCC",
            divider: "#EEEEEE",
            input: {
                background: "$white",
                border: "#EEEEEE",
                borderOverlay: "rgba(0, 0, 0, 0.07)",
                borderInactive: "#EEEEEE",
                text: "$black",
                label: "#BBBBBB",
                labelInactive: "#DDDDDD"
            },
            button: {
                default: {
                    background: "$white",
                    text: "$black"
                },
                inactive: {
                    background: "#FDFDFD",
                    text: "#CCCCCC"
                },
                primary: {
                    background: "$blue",
                    text: "$white",
                    border: "rgba(0, 0, 0, 0.1)"
                },
                pressed: {
                    background: "#FAFAFA",
                }
            },
            segmentDivider: "#EEEEEE",
            headerBorder: "#EEEEEE"
        },
        pins: {
            frameBorder: "#EEEEEE"
        },
        colorSwatch: {
            border: "rgba(0, 0, 0, 0.1)"
        },
        constraints: {
            referenceFrame: "#DDDDDD"
        },
        sectionHeader: {
            text: "#222222",
            popUp: "#AAAAAA"
        },
        search: {
            placeholder: "#BBBBBB",
            placeholderFocused: "#DDDDDD"
        },
        focusRing: "$blue",
        slider: {
            knob: {
                fill: "$white",
                shadow: "0 1px 0 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.1)"
            },
            track: {
                color: "#DDDDDD",
                highlight: "$blue",
                inactive: "#EEEEEE"
            }
        },
        checkbox: {
            background: {
                default: "$white",
                pressed: "#F8F8F8",
                checked: "$blueBrightened",
                checkedPressed: "$blue"
            },
            border: {
                default: "#DDDDDD",
                checked: "$blue",
                checkedInner: "$blue"
            },
            indicator: "$white"
        },
        popOver: {
            background: "$white",
            shadow: "0 5px 10px rgba(0,0,0,.25), 0 0 0 1px rgba(0,0,0,.05)",
            arrowBorder: "1px solid rgba(0,0,0,.1)"
        },
        layerCreatePreview: "#666666",
        frame: {
            title: "#BBBBBB",
            outline: "#CCCCCC",
            preview: "rgba(0, 0, 0, 0.03)",
            previewOutline: "rgba(0, 0, 0, 0.1)"
        },
        selectionBox: {
            box: "rgba(125, 125, 125, 0.03)",
            outline: "rgba(125, 125, 125, 0.3)",
            background: "rgba(0, 153, 255, 0.2)",
            componentBackground: "rgba(136, 85, 255, 0.2)",
        },
        resize: {
            box: "$blue",
            handle: "$white",
            handleOutline: "$blue"
        },
        snap: {
            line: "$pink",
            constraint: "$yellow",
        },
        parentHighlight: "$blue",
        shapeContainer: {
            outline: "#CCCCCC"
        },
        segmentAnchor: {
            unknown: "$white",
            outline: "$blue"
        },
        pathCurve: {
            preview: "$blue",
        },
        navigationConnectionLine: "rgba(135, 135, 135, 0.5)",
        package: {
            title: {
                text: "#333333",
                background: "#FDFDFD",
                border: "#EEEEEE",
                arrow: "#CCCCCC",
                newBadge: {
                    background: "rgba(0, 0, 0, 0)",
                    border: "hsla(204, 100%, 50%, 0.2)",
                    label: "$blue"
                }
            },
            icon: {
                border: "rgba(0, 0, 0, 0.8)",
                background: "rgba(0, 0, 0, 0)"
            },
        },
        component: {
            item: {
                background: "#F2F2F2",
                border: "#EEEEEE",
                label: "#888888"
            },
            category: {
                label: "#333333",
            },
            empty: {
                header: "$black",
                text: "#999999",
                inactive: "#DDDDDD",
                active: "$blue"
            }
        },
        error: {
            unknown: "#EE4444",
            text: "white"
        },
        statusBar: {
            background: "#FDFDFD",
            border: "#DDDDDD",
            text: "#999999",
            activeText: "$blueDarkened2",
            updateItemActive: "$blueDarkened2",
            errorItemActive: "#FF0100",
            itemInactive: "#777777"
        },
        webFrame: {
            background: "#FBFBFB",
            title: "#111111",
            message: "#rgb(153, 153, 153)"
        },
        tooltip: {
            color: "$white"
        }
    }
}

// Todo: Implement dark theme.
export const darkTheme: IRawThemeDescription = lightTheme;*/