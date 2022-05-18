let albums = localStorage.getItem("albumId");
let ids = localStorage.getItem("Id");
let titles = localStorage.getItem("title");
let images = localStorage.getItem("url")
let thumbnail = localStorage.getItem("thumbnailUrl")


let container = document.querySelector(".container")

let albumsId = document.createElement('div')
albumsId.innerText = `AlbumId: ${albums}`

let Id = document.createElement("div")
Id.innerText = `Id: ${ids}`

let title = document.createElement('div')
title.innerText = `Title: ${titles}`

let url = document.createElement("div")
url.innerText = `Url: ${images}`

let img = document.createElement('img')
img.src = thumbnail




container.append(albumsId)
container.append(Id)
container.append(title)
container.append(url)
container.append(img)
container.append(thumbnailUrls)


