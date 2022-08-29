const React = require("react");

function Def(html) {
  return (
    <html>
      <head>
        <title>{html.title || "Default"}</title>
        <link rel="stylesheet" href="/css/style.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
        />
      </head>
      <body>
        <h1></h1>
        {html.children}
        <footer class="footer">
          <h3>Philip Bowman</h3>
          <h4>follow me out at</h4>
          <p>
            {" "}
            <a href="https://www.linkedin.com/in/philip-bowman-273914100">
              LinkedIn
            </a>{" "}
            and <a href="https://github.com/AriesRedWar">GitHub</a>
          </p>
        </footer>
      </body>
    </html>
  );
}

module.exports = Def;
