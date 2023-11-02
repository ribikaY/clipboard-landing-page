import {Bai_Jamjuree} from 'next/font/google'
import "@fortawesome/free-brands-svg-icons"
// import "@fortawesome/fontawesome-svg-core/styles.css";
// import { config } from "@fortawesome/fontawesome-svg-core";

import "../../styles/main.scss"

const baiJamjuree = Bai_Jamjuree({ subsets: ['latin'], weight:['400','500','600'] })

export const metadata = {
  title: 'Clipboard Landing Page',
  description: 'A solution to the Clipboard landing page challenge on Frontend Mentor',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={baiJamjuree.className}>{children}</body>
    </html>
  )
}
