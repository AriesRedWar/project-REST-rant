const React = require("react");
const Def = require("../default");

function show(data) {
  return (
    <Def>
      <main>
        <body>
          <div className="row" id="mainPlace">
            <div className="col-sm-6">
              <img id="placeimg" src={data.place.pic} alt={data.place.name} />
              <h3>
                Located in {data.place.city}, {data.place.state}
              </h3>
            </div>
            <div className="col-sm-6">
              <h1>{data.place.name}</h1>
              <h3 id="Rate">Rating</h3>
              <h4>Not Rated</h4>
              <h3 id="Desc">Description</h3>
              <h4>{data.place.showEstablished()}</h4>
              <h5>Serving {data.place.cuisines}</h5>
            </div>
          </div>
          <h3> Comments</h3>
          <h4>
            <p> No comments yet!</p>
          </h4>
        </body>
        <a href={`/places/${data.id}/edit`} className="btn btn-warning">
          Edit
        </a>
        <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </form>
      </main>
    </Def>
  );
}

module.exports = show;
