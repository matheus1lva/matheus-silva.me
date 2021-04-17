import { AppProps } from 'next/app'
import '../styles/index.css'
// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
