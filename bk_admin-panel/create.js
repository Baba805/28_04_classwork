let inputName = document.querySelector("#ContactName");
let inputTitle = document.querySelector("#ContactTitle");
let inputCountry = document.querySelector("#Country");
let add = document.querySelector("#add");

let API_URL = 'https://northwind.vercel.app/api';

const postSupplier =  async (supplier) => {
    await fetch(`${API_URL}/suppliers`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(supplier)
    })
}

add.addEventListener("click", (e) =>{
    e.preventDefault();
    console.log(inputName.value);
    const supplier = {
        contactName : inputName.value,
        contactTitle  : inputTitle.value,
    }
    

    inputName = "";
    inputTitle = "";
    postSupplier(supplier);
    // window.location.href = "file:///C:\Users\User\Desktop\bk_admin-panel\index.html"
})
