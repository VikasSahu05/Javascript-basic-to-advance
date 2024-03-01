const button = document.querySelectorAll(".button");
console.log(button);

const body = document.querySelector("body")

button.forEach(element => {
    //  console.log(element);
    element.addEventListener('click',function(e){
        // console.log(e.target.id);

        // using if else
        
        // if(e.target.id === 'grey'){
        //     body.style.backgroundColor = e.target.id;
        //     body.style.color = "white"
        // }else if(e.target.id === "blue"){
        //     body.style.backgroundColor = e.target.id;
        //     body.style.color = "white"
        // }else if(e.target.id === "white"){
        //     body.style.backgroundColor = e.target.id;
        //     body.style.color = "black"
        // }else if(e.target.id === "red"){
        //     body.style.backgroundColor = e.target.id;
        //     body.style.color = "white"
        // }

        // using switch case
        switch (e.target.id) {
            case 'grey':
                body.style.backgroundColor = e.target.id;
                body.style.color = "white"
                break;
            case 'blue':
                body.style.backgroundColor = e.target.id;
                body.style.color = "white"
                break;
            case 'white':
                body.style.backgroundColor = e.target.id;
                body.style.color = "black"
                break;
            case 'red':
                body.style.backgroundColor = e.target.id;
                body.style.color = "white"
                break;    
            default:
                break;
        }

    })
});