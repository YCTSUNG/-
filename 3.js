let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");

let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")


btn1.addEventListener("click" , () =>{

    let body ={
        "city":input1.value
    }
    fetch("http://localhost:8080/find_by_city", {
    method:"POST",
    headers:{"Content-Type" : "application/json",
    },
    body: JSON.stringify(body)
    })
    .then(response=>{
        return response.json()
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => console.log(err))
    
    input1.value = "";
    })

    btn2.addEventListener("click" , () =>{

        let body ={
            "dinerScore":input2.value
        }
        fetch("http://localhost:8080/find_by_dinerscore_greater_than_desc", {
        method:"POST",
        headers:{"Content-Type" : "application/json",
        },
        body: JSON.stringify(body)
        })
        .then(response=>{
            return response.json()
        })
        .then(data => {
            console.log(data);
        })
        .catch(err => console.log(err))
        
        input2.value = "";
        })