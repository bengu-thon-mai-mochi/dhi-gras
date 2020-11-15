import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ff6000',
        },
        secondary: {
            main: '#b3b3f2',
        },
    },
    typography: {
        fontFamily:
            'Nunito'
    }
});

export default theme;
