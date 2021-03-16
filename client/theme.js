import { createMuiTheme } from '@material-ui/core/styles'
import { pink } from '@material-ui/core/colors'
const theme = createMuiTheme({
 typography: {
 useNextVariants: true,
 },
 palette: {
 primary: {
 light: '#6C6B6B',
 main: '#FED9B8',
 dark: '#2e355b',
 contrastText: '#000000',
 },
 secondary: {
 light: '#ff79b0',
 main: '#ff4081',
 dark: '#c60055',
 contrastText: '#000000',
 },
 openTitle: '#3f4771',
 protectedTitle: '#FF883B',
 type: 'light'
},
transitions: {
easing: {
easeInOut: 'linear',
easeOut: 'linear',
easeIn: 'linear',
sharp: 'linear'
},
}
})
 export default theme
