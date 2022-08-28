const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                <img src="/images/Aries.jpg" alt="aries God of Ware on fire" />
                <a href="/">
  <button className="btn-primary">Home Page</button>
</a>
            </div>
          </main>
      </Def>
    )
  }
  

module.exports = error404
