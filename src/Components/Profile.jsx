import React from 'react'

// const exampleResponse = {
//     "login": "JeetKumarRamnani",
//     "id": 110333842,
//     "node_id": "U_kgDOBpOPkg",
//     "avatar_url": "https://avatars.githubusercontent.com/u/110333842?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/JeetKumarRamnani",
//     "html_url": "https://github.com/JeetKumarRamnani",
//     "followers_url": "https://api.github.com/users/JeetKumarRamnani/followers",
//     "following_url": "https://api.github.com/users/JeetKumarRamnani/following{/other_user}",
//     "gists_url": "https://api.github.com/users/JeetKumarRamnani/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/JeetKumarRamnani/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/JeetKumarRamnani/subscriptions",
//     "organizations_url": "https://api.github.com/users/JeetKumarRamnani/orgs",
//     "repos_url": "https://api.github.com/users/JeetKumarRamnani/repos",
//     "events_url": "https://api.github.com/users/JeetKumarRamnani/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/JeetKumarRamnani/received_events",
//     "type": "User",
//     "site_admin": false,
//     "name": "Jeet Kumar Ramnani",
//     "company": null,
//     "blog": "",
//     "location": null,
//     "email": null,
//     "hireable": null,
//     "bio": "Web Developer And Musician",
//     "twitter_username": null,
//     "public_repos": 49,
//     "public_gists": 0,
//     "followers": 6,
//     "following": 1,
//     "created_at": "2022-07-31T10:46:19Z",
//     "updated_at": "2023-09-09T21:38:53Z"
// }

function Profile({uiData}) {
    console.log(uiData)
  return (
    <section className="my-5">
        <article id="profile" className="p-5">    
            <section className="User-Profile-Picture flex justify-center ">
                <img src={uiData.avatar_url} alt={uiData.name} className='shadow-lg' />
            </section>
            <section className="User-Information my-2">
                <h2 className="text-center font-semibold text-xl md:text-3xl mb-5 text-red-500">{uiData.name}</h2>
                <h4 className="text-justify font-medium md:text-lg">{uiData.bio}</h4>
                <div className="Repo-Details flex flex-col gap-2 mt-4  md:mt-8">
                    <div className="Followers border-4 border-black bg-orange-300 overflow-hidden font-bold text-sm flex justify-between items-center p-1">
                        Followers <span className="border-2 border-black px-3 bg-white text-red-500 font-bold">{uiData.followers}</span>
                    </div>
                    <div className="Repo border-4 border-black bg-orange-300 overflow-hidden font-bold text-sm flex justify-between items-center p-1">
                    <a href={`https://github.com/${uiData.login}?tab=repositories`} target="_blank">Repos</a> <span className="border-2 border-black px-3 bg-white text-red-500 font-bold">{uiData.public_repos}</span>

                    </div>
                    <div className="Following border-4 border-black bg-orange-300 overflow-hidden font-bold text-sm flex justify-between items-center p-1">
                        Following <span className="border-2 border-black px-3 bg-white text-red-500 font-bold">{uiData.following}</span>
                    </div>
                </div>
            </section>
        </article>
    </section>
  )
}



export default Profile