import * as React from "react"
import {Frame, ControlType, PropertyControls} from "framer"
import {applyTheme, resetTheme} from "./utils"
import {IThemeDescription} from "./types/themeDescription"

interface Props {
  enabled: boolean
  theme: string
  width: number
  height: number
}

interface State {
  theme: {
    path: string
    raw: string
    data: IThemeDescription
    custom: boolean
  }
}

export class kleur extends React.Component<Props, State> {
  static defaultProps = {
    enabled: false,
    theme: "",
    width: 280,
    height: 180
  }

  static propertyControls: PropertyControls = {
    enabled: {
      type: ControlType.Boolean,
      title: "Enabled?",
      enabledTitle: "Yes",
      disabledTitle: ".",
      hidden: (props: Props): boolean => {
        return props.enabled
      }
    },
    theme: {
      type: ControlType.File,
      title: "Theme",
      allowedFileTypes: ["json", "kleur"]
    }
  }

  state = {
    theme: {
      path: "",
      raw: "",
      data: undefined,
      custom: false
    }
  }

  downloadTheme(path: string) {
    fetch(path)
      .then(response => response.text())
      .then(text => {
        let [success, data] = applyTheme(text)
        if (success) {
          this.setState({
            theme: {
              raw: text,
              data: data,
              path: path,
              custom: true
            }
          })
          this.forceUpdate()
        }
      })
  }

  componentWillUnmount() {
    if (this.props.enabled && this.state.theme.path !== "") {
      resetTheme()
    }
  }

  render() {
    if (this.props.enabled) {
      if (this.props.theme !== "") {
        if (this.state.theme.path !== this.props.theme) {
          this.downloadTheme(this.props.theme)
        }
      } else {
        resetTheme()
        if (this.state.theme.custom)
          this.setState({
            theme: {
              raw: "",
              data: undefined,
              path: "",
              custom: false
            }
          })
      }
    }

    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          color: "white",
          padding: 24,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(0deg, #2ee0ff, hsl(236, 100%, 86%))",
          textShadow: "0px 2px 5px rgba(0, 0, 0, 0.15)"
        }}
      >
        <h1 style={{margin: 0}}>
          {this.state.theme.data
            ? this.state.theme.data.name
            : "No theme loaded"}
        </h1>
        {this.state.theme.data ? `by ${this.state.theme.data.author}` : ""}
      </div>
    )
  }
}
