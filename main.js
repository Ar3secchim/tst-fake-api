const perfil = document.querySelector('ul').innerText

const containerComment = document.querySelector('#containerComment').innerText


async function getData(){
  try{
    const promise = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await promise.json()
    return data

  } catch (error){
    console.log('error')
  }
}
function createComment (element){
  let userName = document.querySelector('#userName').innerText
  let idUser = element.userId

  userName.innerHTML = idUser

  console.log(idUser)
}


async function main() {
    const data = await getData()
    const userName1 = await data.filter(data => data.userId === 1)

    userName1.forEach(element => {
      createComment(element)
    })
}

main()