import React from 'react'

function UserDetails({profile, repo}) {
    return (
        <>
            {
                profile && <div className="profileDetails">
                    <div className="profileCard">
                        <h1 className='profileHeaderText'>Profile Overview</h1>
                        <img className="userProfile" src={profile.avatar_url}></img>
                        <h2 className="userName">User Name : {profile.name}</h2>
                        <h3 className="gitHubId">GitHub Id : {profile.login}</h3>
                        <h3 className="followers">Total Followers :  {profile.followers}</h3>
                        <h3 className="followers">Total Following :  {profile.following}</h3>
                        <h3 className="repos">Total Repositories : {profile.public_repos}</h3>
                        <p className="bio">Bio : {profile.bio}</p>
                        <a href={profile.html_url} className='profileViewBtn'>View</a>
                    </div>
                    <div className="repoContainer">
                        <h2 className='repoHeaderText'>Repositories Details</h2>
                        {
                            repo.map((repo) => {
                                return (
                                    <div className="repoDetails">
                                        <h4 className="repoName">{repo.name}</h4>
                                        <a href={repo.html_url}>View</a>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            }
        </>
    )
}

export default UserDetails