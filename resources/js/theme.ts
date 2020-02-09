import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#3d5afe"
        },
        secondary: {
            main: "#ffc107"
        }
    },
    typography: {
        fontFamily: ["'Crimson Text'", "serif"].join(",")
    }
});
