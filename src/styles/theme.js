import { createMuiTheme } from "@material-ui/core/styles";

import yellow from "@material-ui/core/colors/yellow";

export default createMuiTheme({
  palette: {
    primary: {
      light: yellow[300],
      main: yellow[700],
      dark: yellow[1000]
    }
  }
});
