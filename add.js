const addBtn = document.getElementById('addBtn');
const titleInput = document.getElementById('title');
const imageInput = document.getElementById('image');
const description = document.getElementById('description');
const contactPersonName = document.getElementById('contactPersonName');
const contactPersonNumber = document.getElementById('contactPersonNumber');


let emptyArray = [];
if (localStorage.getItem('statements') === null) {
    localStorage.setItem('statements',JSON.stringify(emptyArray))
}
let statements = JSON.parse(localStorage.getItem('statements'));
addBtn.addEventListener('click', () => {
    if (titleInput.value === "" || contactPersonName.value === "" || contactPersonNumber.value === "" ||description.value === "" ||imageInput.value === "") {
        return console.log('error')
    }
    const newStatement = new Statement(titleInput.value, contactPersonName.value, contactPersonNumber.value, null, description.value, null, null, imageInput.value); 
   
    statements.push(newStatement);
    localStorage.setItem('statements', JSON.stringify(statements));
    window.location.replace('index.php');
    // addStatement(newStatement)
});

// const addStatement = (statement) => {
//     $.ajax({
//         method: "POST",
//         url: "http://localhost:3000/statements",
//         data: statement
//     })
//     .done(function (data) {
//       console.log(data);
//     });
// }