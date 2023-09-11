import React from 'react'

const obj= {
    "login": "FarhatHussain01",
    "id": 108375932,
    "node_id": "U_kgDOBnWvfA",
    "avatar_url": "https://avatars.githubusercontent.com/u/108375932?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/FarhatHussain01",
    "html_url": "https://github.com/FarhatHussain01",
    "followers_url": "https://api.github.com/users/FarhatHussain01/followers",
    "following_url": "https://api.github.com/users/FarhatHussain01/following{/other_user}",
    "gists_url": "https://api.github.com/users/FarhatHussain01/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/FarhatHussain01/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/FarhatHussain01/subscriptions",
    "organizations_url": "https://api.github.com/users/FarhatHussain01/orgs",
    "repos_url": "https://api.github.com/users/FarhatHussain01/repos",
    "events_url": "https://api.github.com/users/FarhatHussain01/events{/privacy}",
    "received_events_url": "https://api.github.com/users/FarhatHussain01/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Syed Farhat Hussain",
    "company": null,
    "blog": "",
    "location": "Haripur kPk Pakistan ",
    "email": null,
    "hireable": null,
    "bio": "Hi there! I'm Syed Farhat, a passionate front-end developer with expertise in HTML, Tailwind CSS, JavaScript, React JS, and Next JS.",
    "twitter_username": null,
    "public_repos": 32,
    "public_gists": 0,
    "followers": 0,
    "following": 10,
    "created_at": "2022-06-29T00:07:19Z",
    "updated_at": "2023-08-19T15:07:53Z"
}

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