import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
// const components = {
//   Heading: {
//     variants: {
//       'section-title': {
//         TextDecoration: 'underline',
//         fontSize: 20,
//         textUnderlineOffset: 6,
//         textDecorationColor: '#525252',
//         textDecorationThickness: 4,
//         marginTop: 3,
//         marginBottom: 4
//       }
//     }
//   },

//   Link: {
//     baseStyle: props => ({
//       color: mode('#3d7aed', '#ff63c3')(props),
//       textUnderlineOffset: 3
//     })
//   }
// }

const colors = {
  grassTeal: '#88ccca'
}
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({ config })

export default theme
