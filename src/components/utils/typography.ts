import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016);


export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
