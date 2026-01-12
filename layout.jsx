import './globals.css'

export const metadata = {
  title: 'Michael Chukwuamaka UTI | PATHNEL TECH',
  description: 'Innovation and Creativity – Powered by Pathnel Tech',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
