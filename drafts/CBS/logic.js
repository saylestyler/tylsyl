var posts = [
  { title: 'first post woot', body: 'okr' },
  { title: 'sec read more', body: 'right' },
  { title: 'grokd', body: 'rrrrrrrrr' }
]

function getPostTitles () {
  document.body.getElementById('post_titles').innerText = 'fjwaioefjawe'

  posts.map(x => `<li>${x.title}</li>`)
}

function createSinglePost (singlePost, cb) {
  posts.push(singlePost)
  cb()
}

createSinglePost({ title: 'omg created', body: 'r u srs' }, getPostTitles)

console.log(posts)
