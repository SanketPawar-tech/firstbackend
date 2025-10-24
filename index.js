require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

const githubData = {
  "login": "SanketPawar-tech",
  "id": 191942499,
  "node_id": "U_kgDOC3DPYw",
  "avatar_url": "https://avatars.githubusercontent.com/u/191942499?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/SanketPawar-tech",
  "html_url": "https://github.com/SanketPawar-tech",
  "followers_url": "https://api.github.com/users/SanketPawar-tech/followers",
  "following_url": "https://api.github.com/users/SanketPawar-tech/following{/other_user}",
  "gists_url": "https://api.github.com/users/SanketPawar-tech/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/SanketPawar-tech/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/SanketPawar-tech/subscriptions",
  "organizations_url": "https://api.github.com/users/SanketPawar-tech/orgs",
  "repos_url": "https://api.github.com/users/SanketPawar-tech/repos",
  "events_url": "https://api.github.com/users/SanketPawar-tech/events{/privacy}",
  "received_events_url": "https://api.github.com/users/SanketPawar-tech/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Sanket Pawar",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "Just an ordinary tech enthusiast",
  "twitter_username": null,
  "public_repos": 3,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2024-12-17T04:37:03Z",
  "updated_at": "2025-10-23T06:17:55Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/sanket', (req, res) => {
  res.send('Hello Sanket!')
})

app.get('/login', (req, res) => {
  res.send('<h1>Please Login First</h1>')
})

app.get('/github', (req, res) => {
  res.json(githubData)
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})


