// ami ekta array nilam bazar er jonno
var bazar = JSON.parse(localStorage.getItem("bazar")) || []

show()

function addBazar(){
    var input = document.getElementById("bazarInput")
    var itemName = input.value.trim()

    if(itemName == ""){
        alert("Please write something")
        return
    }

    bazar.push(itemName) // list e dhukalam

    // save kore rakhlam jate refresh dile na jay
    localStorage.setItem("bazar", JSON.stringify(bazar))

    input.value = ""
    show()
}

function show(){
    var ul = document.getElementById("bazarUl")
    ul.innerHTML = ""

    for(var i=0; i<bazar.length; i++){
        // ekta ekta kore li banacchi
        var listItem = "<li class='flex justify-between p-2 border mt-2 rounded'>"
        listItem += "<span>" + bazar[i] + "</span>"
        listItem += "<button onclick='deleteBazar("+i+")' class='text-red-600'>X</button>"
        listItem += "</li>"

        ul.innerHTML += listItem
    }
}

function deleteBazar(i){
    bazar.splice(i,1)
    localStorage.setItem("bazar", JSON.stringify(bazar))
    show()
}