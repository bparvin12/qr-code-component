import { Outfit } from 'next/font/google'
import '../styles/global.css'

// If loading a variable font, you don't need to specify the font weight
const outfit = Outfit({ subsets: ['latin'] })


export default function MyApp({ Component, pageProps }) {
  return <Component className={outfit.className} {...pageProps} />
}
