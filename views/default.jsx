const React = require('react')

function Def (html) {
    return (
        <html>
        <head>
          <title>{html.title || 'Default'}</title>
        </head>
        <body>
          <h1></h1>
          {html.children}
        </body>
        </html>
      )
    }

module.exports = Def
