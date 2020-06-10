// styled-components.ts
import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';

interface IThemeInterface {
  blueColor: string;
  greyColor: string;
}

const {
  default: styled,
  css,
  createGlobalStyle,
  keyFrames,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<IThemeInterface>;

export { css, createGlobalStyle, keyFrames, ThemeProvider };
export default styled;
