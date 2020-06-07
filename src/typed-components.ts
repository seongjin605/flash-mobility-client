// styled-components.ts
import * as styledComponents from 'styled-components/native';

interface IThemeInterface {
  primaryColor: string;
  primaryColorInverted: string;
}

const {
  default: styled,
  css,
  injectGolbal,
  keyFrames,
  ThemeProvider
} = styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<
  IThemeInterface
>;

export { css, injectGolbal, keyFrames, ThemeProvider };
export default styled;
