class CardNews extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({mode: "open"});        
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }
    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class","card")

        const cardLeft = document.createElement("div")
        cardLeft.setAttribute("class", "card_left")
        componentRoot.appendChild(cardLeft)

        const autor = document.createElement("span")
        cardLeft.appendChild(autor)
        autor.textContent = "Escrito por " + (this.getAttribute("autor") || "Anônimo");

        const linkTitle = document.createElement("a")
        cardLeft.appendChild(linkTitle)
        linkTitle.textContent = this.getAttribute("title")
        linkTitle.href = this.getAttribute("link-url")

        const newsResume = document.createElement("span")
        cardLeft.appendChild(newsResume)
        newsResume.textContent =this.getAttribute("content")
        
        const cardRight = document.createElement("div")
        cardRight.setAttribute("class", "card_right")
        componentRoot.appendChild(cardRight)

        const imagem = document.createElement("img")
        cardRight.appendChild(imagem)
        imagem.src = this.getAttribute("newsImg") || "assets/foto-default.png"
        imagem.alt = this.getAttribute("imgAlt")

        return componentRoot;
    }
    styles(){
        const style =document.createElement("style")
        style.textContent= `
        .card{
            width: 75%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            box-shadow: 10px 7px 19px -3px rgba(0,0,0,0.49);
            -webkit-box-shadow: 10px 7px 19px -3px rgba(0,0,0,0.49);
            -moz-box-shadow: 10px 7px 19px -3px rgba(0,0,0,0.49);
        }
        
        .card_left, .card_right{
            border: 1px solid blue;
        }
        
        .card_left{
            background-color: wheat;
        }
        `

        return style
    }
}

customElements.define('card-news',CardNews)