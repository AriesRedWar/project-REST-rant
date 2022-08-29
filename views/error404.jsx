const React = require("react");
const Def = require("./default");

function error404() {
  return (
    <Def>
      <main>
        <div>
          <h1>404: PAGE NOT FOUND</h1>
          <h3>Oops, sorry, we can't find this page!</h3>
          <img src="/images/Aries.jpg" alt="aries God of Ware on fire" />
        </div>
      </main>
    </Def>
  );
}

module.exports = error404;
