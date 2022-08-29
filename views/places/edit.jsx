const React = require("react");
const Def = require("./default");

function edit(data) {
  return (
    <Def>
      <main>
        <div>
        <h1>{data.place.name}</h1>
          <h3>No edit stuff yet!</h3>
        </div>
      </main>
    </Def>
  );
}

module.exports = edit;
