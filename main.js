// capture data
async function getData(){
  try{
    const promise = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await promise.json()
    return data

  } catch (error){
    console.log('error')
  }
}

// create cotainer comment no html
function createComment (element){
  // create container
  const body = document.querySelector("body")
  const containerBox = document.createElement("section")
  containerBox.classList.add("container-box")
  body.appendChild(containerBox)

  // create user
  const userId = document.createElement("div")
  userId.classList.add("user-id")
  containerBox.appendChild(userId)

  userId.innerText = `USER ${element.userId}`

  // create imgUser
  const imgUser = document.createElement("img")
  imgUser.src = ""
  userId.appendChild(imgUser)

  // create userName
  const containerUserComment = document.createElement("div")
  const userName = document.createElement("span")
  userName.classList.add("user-name")
  containerBox.appendChild(containerUserComment)

  userName.innerText = element.id

  //create container comment
  containerUserComment.appendChild(userName)
  containerUserComment.classList.add("containerUserComment")

  const containerComment = document.createElement("span")
  containerUserComment.appendChild(containerComment)
  containerComment.classList.add("container-comment")

  containerComment.innerText = element.body


}

// using dados
async function main() {
    const data = await getData()
    const userName1 = await data.filter(data => data.userId === 1)

    userName1.forEach(element => {
      createComment(element)
      console.log(element)

    })
}

main()