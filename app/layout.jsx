import './styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>SHAlumni</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

        {/* Font Awesome */}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet" />

        {/* Custom CSS */}
        <link href="/css/style-default.min.css" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}