let td = document.createElement('td');
let th = document.createElement('th');
let tr = document.createElement('tr');
let tbody = document.querySelector('tbody');
let create_btn = document.querySelector(".create")

let API_URL = 'https://northwind.vercel.app/api';

function getFetch() {
    fetch(`${API_URL}/suppliers`).then(response => {
        return response.json()

    }).then(data => {
        // console.log(data);
        data.forEach(element => {
            
            let th = document.createElement('th');
            let tdName = document.createElement('td');
            let tdTitle = document.createElement('td');
            let tdCountry = document.createElement('td');
            let tdSettings = document.createElement('td');
            let edit_btn = document.createElement('button');
            // edit_btn.style.backgroundColor = "green";
            edit_btn.setAttribute("class", "btn btn-primary");
            let delete_btn = document.createElement('button');
            delete_btn.setAttribute('class', 'btn btn-danger ms-2');
            // delete_btn.style.backgroundColor = "red";
            let tr = document.createElement('tr');
            let editIcon = document.createElement('i');
            editIcon.setAttribute("class" , "fa-regular fa-pen-to-square ")
            let deleteIcon = document.createElement('i');
            deleteIcon.setAttribute("class" , "fa-solid fa-trash")
            deleteIcon.style.color = "#c3cfe5"

            edit_btn.appendChild(editIcon);
            delete_btn.appendChild(deleteIcon);
            tdSettings.append(edit_btn, delete_btn)
            th.innerText = element.id;
            tdName.innerText = element.companyName;
            tdTitle.innerText = element.contactTitle;
            
            tr.append(th, tdName , tdTitle, tdCountry , tdSettings);
            tbody.appendChild(tr)

            delete_btn.addEventListener("click",  async function()  {
                console.log(element.id);
                   await fetch(`${API_URL}/suppliers/${element.id}`,{
                    
                        method: "DELETE",
                    }).then(response => {
                        
                        return response.json()
                        
                
                    }).then(data => {
                        if (confirm("Are you sure you want to delete?")) {
                            let trr = this.parentNode.parentNode.parentNode;
                        let thh = this.parentNode.parentNode;
                        thh.remove()
                        }
                        
                    })
                
            })

            create_btn.addEventListener("click", async function(a) {
                fetch(`${API_URL}/suppliers` , {
                    method : "POST",
                    headers:{
                        'Content-Type' : 'applicatin/json'
                    },
                    body:JSON.stringify(a)
                })
            })

           
             

            
        });
        

    })
}
getFetch()

// // delete all
// deleteData()


