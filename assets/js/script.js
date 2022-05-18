
   
   fetch("https://jsonplaceholder.typicode.com/photos").then(resp => resp.json()).then(datas => {
    let container = document.querySelector('div')
    container.classList.add("container")
    let row = document.createElement('div')
    row.className= "row justify-content-between"
    

    for (let i = 0; i < datas.length-4500; i++) {
        let col = document.createElement("div")
        col.className = "col-lg-4 mt-5"

        let card = document.createElement("div")
        card.classList.add("card")
        card.style.width = "18rem"
        
        let img = document.createElement("img")
        img.classList.add("card-img-top")

        let cardBody = document.createElement("div")
        cardBody.classList.add("card-body")

        let h5 = document.createElement("h5")
        h5.classList.add("card-title")

        let p = document.createElement("p")
        p.classList.add("card-text")

        let a = document.createElement("a")
        a.className = "btn btn-primary"

        a.setAttribute('href','card.html')

        img.src = datas[i].url
        h5.innerText = datas[i].title
        p.innerText = datas[i].url
        p.style.cursor = "pointer"
        p.style.color = "green"
        a.innerText = "Submit"
        a.href = "card.html"

        cardBody.append(h5)
        cardBody.append(p)
        cardBody.append(a)
        card.append(img)
        card.append(cardBody)
        col.append(card)
        row.append(col)
       

        a.addEventListener('click',function () {
            localStorage.setItem("albumIdValue",datas[i].albumId);
            localStorage.setItem("IdValue",datas[i].id);
            localStorage.setItem("titleValue",datas[i].title);
            localStorage.setItem("url",datas[i].url);
            localStorage.setItem("thumbnailUrl",datas[i].thumbnailUrl);

          })
    }
       
        
     container.append(row)
})
    

   
    
