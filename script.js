const form = document.getElementById("enviasion")

form.addEventListener("submit", (event)=>{

event.preventDefault();

const formData = new FormData(form);


const data = Array.from(formData.entries()).map(([key, value]) => ({
        [key]: value
        }));
console.log(data);


});




