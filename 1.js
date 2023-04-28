let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let input3 = document.querySelector("#input3");
let input4 = document.querySelector("#input4");
let input5 = document.querySelector("#input5");
let input6 = document.querySelector("#input6");
let input7 = document.querySelector("#input7");

let btn1 = document.querySelector(".btn1")
let btn4 = document.querySelector(".btn4")
let btn5 = document.querySelector(".btn5")


btn1.addEventListener("click" , () =>{

    let body ={
        "gourmet_map_list": [{
            "dinerName" : input1.value,
            "city" : input2.value,     //到時用input和document去抓
            "dinerScore" : input3.value
        } ]
    }
    fetch("http://localhost:8080/add_diner", {
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
    input2.value = "";
    input3.value = "";
    
    })

    btn4.addEventListener("click" , () =>{

        let body ={
            "gourmet_map_list": [{
                "dinerName" : input4.value,
            } ]
        }
        fetch("http://localhost:8080/delete_diner", {
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
        
        input4.value = "";
        })

        btn5.addEventListener("click" , () =>{

            let body ={
                "gourmet_map_list": [{
                    "dinerName" : input5.value,
                    "city" : input6.value,     
                    "dinerScore" : input7.value
                } ]
            }
            fetch("http://localhost:8080/update_diner", {
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
            
            input5.value = "";
            input6.value = "";
            input6.value = "";
            })