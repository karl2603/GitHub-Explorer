import React from 'react'

function Hero({user, setUser, fetchUser}) {
  return (
    <>
    <header className="hero">
          <div className="hero-content">
            <h1 className="title">GitHub Explorer</h1>
            <p className="subtitle">
              Discover developers, explore repositories, and inspect open-source work
            </p>

            <div className="search-box">
              <input
                type="text"
                placeholder="Search GitHub username..."
                name="input"
                value={user}
                onChange={(e)=>{setUser(e.target.value)}}
              />
              <button onClick={fetchUser}>Explore</button>
            </div>
          </div>
        </header>
    </>
  )
}

export default Hero