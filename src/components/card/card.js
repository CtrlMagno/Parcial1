class CardComponent extends HTMLElement {

    static get observedAttributes() {
        return ['img','tittle', 'text', 'review', 'price','state'];
    }

    constructor(){
        super();
    };

    attributeChangedCallback(name, oldValue, newValue) {
        if(oldValue !== newValue)
            this[name]
    };

    

    
    

    render(){
        this.shadowRoot.innerHTML= `
        <style>


        body{
            font-family: Arial, Helvetica, sans-serif;
        }

        .card{
            width: 350px;
            height: 550px;
            border: 1px solid gray;
            border-radius: 10px;
            
        }

        .img{
            width: 100%;
            height: 60%;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }

        .title{
            font-size: x-large;
            font-weight: bold;
            margin-left: 10px;
        }

        .text{
            font-size: smaller;
            font-weight: 100;
            margin-left: 10px;
        }

        .div2{
            display: flex;
            justify-content: space-between;
            margin-left: 10px;
            margin-right: 40px;
        }


        .review{
            margin: 0;
            padding-top: 5px;
            padding-bottom: 5px;
            padding-left: 20px;
            padding-right: 20px;
            border-radius: 10px;
            border: 1px solid gold;
            background-color: gold;
            color: white;
            font-weight:bolder;
        }

        .price{
            color: black;
            opacity: 60%;
            margin: 0px;
        }

        .divLine{
            text-align: center;
            font-weight: bolder;
        }

        .line{
            margin: 0px;
        }

        .state{
            margin-top: 20px;
            margin-left: 10px;
            color: black;
            opacity: 60%;
            
        }

        .div3{
            display: flex;
            justify-content: space-between;
        }

        .button{
            margin-right: 20px;
            margin-top: 20px;
        }




        </style>


        <div class="card">

            <div class="divImage">
                <img src="${this.img}" alt="" class="img">
            </div>

            <div class="divTitle">
                <p class="title">${this.title}</p>
            </div>

            <div class="divText">
                <p class="text">${this.text}</p>
            </div>

            <div class="div2">

                <div class="divReview">
                    <p class="review">${this.review}</p>
                </div>

                <div class="divPrice">
                    <p class="price">${this.price}</p>
                </div>

            </div>

            <div class="divLine">
                <p class="line">___________________________________</p>
            </div>

            <div class="div3">
                <div class="divState">
                    <p class="state">${this.state}</p>
                </div>

                <div class="divButton">
                    <button class="button">Remember Me</button>
                </div>
            </div>

        </div>
        
        `
    }



}

customElements.define("card-component", CardComponent);



