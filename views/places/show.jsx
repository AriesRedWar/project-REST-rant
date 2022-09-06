const React = require("react");
const Def = require("../default");

function show(data) {
  let comments = <h4 className="inactive">No Comments yet!</h4>;
  if (data.place.comments.length) {
    comments = data.place.comments.map((c) => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? "Rant! 😡" : "Rave! 😍"}</h2>
          <h4>{c.content}</h4>
          <h4>
            <stong>- {c.author}</stong>
          </h4>
          <h4>Rating: {c.stars}</h4>
        </div>
      );
    });
  }
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
              <div id="ah">
                <form id="btn" method="POST">
                  {" "}
                  <a
                    type="click"
                    href={`/places/${data.place.id}/edit`}
                    className="btn btn-warning"
                  >
                    Edit
                  </a>
                </form>
                <form
                  id="btn"
                  method="POST"
                  action={`/places/${data.place.id}?_method=DELETE`}
                >
                  <button type="submit" className="btn btn-danger">
                    Delete
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div>
            <h3> Comments</h3>
            {comments}
          </div>
          <div>
            <h1>Got Your Own Rant or Rave?</h1>
            <form
              action={`/places/${data.place.id}/comments`}
              method="POST"
            >
              <div className="row">
                <div className="form-group col-sm-12">
                  <label htmlFor="content">Content</label>
                  <textarea
                    id="content"
                    name="content"
                    className="form-control"
                  ></textarea>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-sm-4">
                  <label htmlFor="author">Author</label>
                  <input id="author" name="author" className="form-control" />
                </div>
                <div className="form-group col-sm-4">
                  <label htmlFor="stars">Star Rating</label>
                  <input
                    type="range"
                    step="0.5"
                    min="1"
                    max="5"
                    id="stars"
                    name="stars"
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-2">
                  <label htmlFor="rant">Rant?</label>
                  <input
                    type="checkbox"
                    id="rant"
                    name="rant"
                    className="form-control"
                  />
                </div>
              </div>
              <input
                type="submit"
                className="btn btn-primary"
                value="Add Comment"
              />
            </form>
          </div>
        </body>
      </main>
    </Def>
  );
}

module.exports = show;
