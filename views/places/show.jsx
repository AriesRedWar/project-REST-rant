const React = require("react");
const Def = require("../default");

function show(data) {
  return (
    <Def>
      <main>
        <body>
          <div id="mainPlace">
            <img id="placeimg" src={data.place.pic} alt={data.place.name} />
            <div className="row">
              <h1>{data.place.name}</h1>
              <h3 id="Rate"> Rating</h3>
              <h4>
                <p> Not Rated</p>
              </h4>

              <h3 id="Desc"> Description</h3>
              <h4>
                <p>
                  {" "}
                  Located in {data.place.city}, {data.place.state} and serving{" "}
                  {data.place.cuisines}
                </p>
              </h4>
            </div>
          </div>

          <h3> Comments</h3>
          <h4>
            <p> No comments yet!</p>
          </h4>
        </body>
      </main>
    </Def>
  );
}

module.exports = show;
