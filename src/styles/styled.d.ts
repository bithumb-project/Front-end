// import original module declarations
import { Theme } from './Theme';
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    palette: {
      primary: {
        main: string;
      };
      secondary: {
        main: string;
        light: string;
      };
    };
    breakpoints: {
      values: {
        xl: number;
        lg: number;
        md: number;
        sm: number;
        xs: number;
      };
    };
  }
}
