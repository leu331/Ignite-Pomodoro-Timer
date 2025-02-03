import 'styled-components'
import { darkTheme } from '../Styles/Themes/darkTheme'

type DarkThemeType = typeof darkTheme

declare module "styled-components" {
    export interface DefaultTheme extends DarkThemeType {}
}

import { lightTheme } from '../Styles/Themes/lightTheme'

type LightThemeType = typeof lightTheme

declare module "styled-components" {
    export interface DefaultTheme extends LightThemeType{}
}