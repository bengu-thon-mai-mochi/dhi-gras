import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#FF8133',
            main: '#ff6000',
        },
        secondary: {
            main: '#23ec19',
        },
    },
    typography: {
        fontFamily:
            'Nunito'
    }
});

export default theme;
