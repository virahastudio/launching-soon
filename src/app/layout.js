import { Jura } from "next/font/google"
import "./globals.css"

const jura = Jura({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jura",
})

export const metadata = {
  title: "Viraha | Launching Soon",
  description: "Viraha Clothing – Launching Soon",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jura.variable}>
      <body>{children}</body>
    </html>
  )
}