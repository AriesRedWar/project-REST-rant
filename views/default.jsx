const React = require('react')

function Def (html) {
    return (
        <html>
        <head>
          <title>{html.title || 'Default'}</title>
          <link rel="stylesheet" href="/css/style.css" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" />
        </head>
        <body>
        <h1></h1>
          {html.children}
        </body>
        </html>
      )
    }

module.exports = Def


