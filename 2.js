let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let input3 = document.querySelector("#input3");
let input4 = document.querySelector("#input4");
let input5 = document.querySelector("#input5");
let input6 = document.querySelector("#input6");
let input7 = document.querySelector("#input7");
let input8 = document.querySelector("#input8");

let btn1 = document.querySelector(".btn1")
let btn5 = document.querySelector(".btn5")



btn1.addEventListener("click" , () =>{

    let body ={
        "gourmet_map2_list": [{
            "dinerName" : input1.value,
            "dish" : input2.value,     //到時用input和document去抓
            "price" : input3.value,
            "dishScore" : input4.value,
        } ]
    }
    fetch("http://localhost:8080/add_diner_dish", {
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
    input4.value = "";
    
    })

    btn5.addEventListener("click" , () =>{

        let body ={
            "gourmet_map2_list": [{
                "dinerName" : input5.value,
                "dish" : input6.value,     //到時用input和document去抓
                "price" : input7.value,
                "dishScore" : input8.value,
            } ]
        }
        fetch("http://localhost:8080/update_diner_dish", {
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
        input7.value = "";
        input8.value = "";
        
        })
    