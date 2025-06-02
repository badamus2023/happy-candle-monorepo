import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      purple: string;
      lightPurple: string;
      darkPurple: string;
      pink: string;
      lightPink: string;
      darkPink: string;
    };
  }
}
