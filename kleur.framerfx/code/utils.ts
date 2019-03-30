import {IRawThemeDescription, IThemeDescription} from "./types/themeDescription"
import themeComponents from "./components"
import {xint} from "./xint"

/**
 * Sets an internal property of the Framer X editor with a given `key` to a given `value`.
 * @param key The key of the internal property. See `xint` for a full list.
 * @param value The value that the internal property should be set to.
 */
export const setFramerProperty = (key: string, value?: string) => {
  if (value)
    document.documentElement.style.setProperty(
      `--framerInternalUI-${key}`,
      value,
      "important"
    )
}

/**
 * Sets an array of internal properties of the Framer X editor with given `keys` to a given `value`.
 * @param keys The keys of the internal properties. See `xint` for a full list.
 * @param value The value that the internal properties should be set to.
 */
export const setFramerPropertyArray = (keys: string[], value?: string) => {
  for (let key of keys) {
    setFramerProperty(key, value)
  }
}

/**
 * Resets an internal property of the Framer X editor with a given `key` to the default value.
 * @param key The key of the internal property. See `xint` for a full list.
 */
export const resetFramerProperty = (key: string) => {
  document.documentElement.style.removeProperty(`--framerInternalUI-${key}`)
}

/**
 * Resets an array of internal properties of the Framer X editor with given `keys` to their default values.
 * @param keys The keys of the internal property. See `xint` for a full list.
 */
export const resetFramerPropertyArray = (keys: string[]) => {
  for (let key of keys) {
    resetFramerProperty(key)
  }
}

/**
 * Resolves the color macros and applies their actual color values.
 * @param rawTheme The raw theme with a color macro set.
 * @returns A theme description with resolved colors.
 */
const resolveColors = (rawTheme: IRawThemeDescription): IThemeDescription => {
  let theme: IThemeDescription = {
    name: rawTheme.name ? rawTheme.name : "Theme Name",
    author: rawTheme.author ? rawTheme.author : "Author",
    theme: recursiveApplyColors(rawTheme.theme, rawTheme)
  }

  return theme
}

// Todo: Switch from IRawThemeDescription to just colors.
/**
 * Applies the correct color values for every member of a passed object.
 * Recursive for every member that has the object type
 * @param obj An object containing different color values and other objects.
 * @param rawTheme The original raw theme with the color values.
 */
const recursiveApplyColors = (
  obj: object,
  rawTheme: IRawThemeDescription
): any => {
  let retObj = {}

  // Loop over every member in the current object.
  for (let key in obj) {
    // If the member exists, continue.
    if (obj.hasOwnProperty(key)) {
      // If the member is an object, do a recursive call.
      // Else If the member is a string, try to find the color value.
      if (typeof obj[key] === "object") {
        retObj[key] = recursiveApplyColors(obj[key], rawTheme)
      } else if (typeof obj[key] === "string") {
        // If the color string starts with a $ symbol,
        //   it represents a color macro.
        // Fallback color => #FF0000
        if (obj[key].startsWith("$")) {
          let color: string

          // If the color macro set exists, continue.
          if (rawTheme.colors) {
            // Remove the $ symbol from the start of the string.
            let colIndex = obj[key].substr(1)
            // If the color set contains the wanted color, set color to the wanted color.
            if (rawTheme.colors.hasOwnProperty(colIndex)) {
              color = rawTheme.colors[colIndex]
            }
          }

          // If the color couldn't be found, apply the fallback color.
          if (!color) {
            color = "#FF0000"
          }

          // Add the color to the return object.
          retObj[key] = color
        } else {
          // Add the color / text to the return object.
          retObj[key] = obj[key]
        }
      }
    }
  }

  return retObj
}

/**
 * Applies a given `raw theme` to the Framer X editor.
 * @param rawTheme The raw theme as a JSON string.
 */
export const applyTheme = (rawTheme: string): [boolean, IThemeDescription] => {
  try {
    if (rawTheme.startsWith("<")) {
      return [false, undefined]
    }
    // Load raw theme from string.
    let rawLoadedTheme = <IRawThemeDescription>JSON.parse(rawTheme)

    // Apply colors.
    let theme = resolveColors(rawLoadedTheme)

    // Apply the theme to the current document.
    for (let key in themeComponents) {
      themeComponents[key].apply(theme.theme[key])
    }

    return [true, theme]
  } catch (e) {
    console.warn(e)
    resetTheme()
    themeComponents.canvas.reset()
    return [false, undefined]
  }
}

/**
 * Reset the Framer X editor to its default theme.
 */
export const resetTheme = () => {
  for (let key in xint) {
    resetFramerProperty(key)
  }
  themeComponents.canvas.reset()
}
