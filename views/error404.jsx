const React = require("react");
const Def = require("./default");

function error404() {
  return (
    <Def>
      <main>
        <div>
          <h1>404: PAGE NOT FOUND</h1>
          <p>Oops, sorry, we can't find this page!</p>
          <a href="/">
            <button className="btn-primary">Home Page</button>
          </a>
            <img src="/images/Aries.jpg" alt="aries God of Ware on fire" />
        </div>
      </main>
    </Def>
  );
}

module.exports = error404;
