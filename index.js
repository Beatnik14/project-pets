const petList = document.querySelector('.pet-list');
const btn = document.querySelector('.btn');
const search = document.getElementById('search');

const statementsAsString = localStorage.getItem('statements');
const statementsAsArray = JSON.parse(statementsAsString);
console.log(statementsAsString);
console.log(statementsAsArray);

const appendStatement = (statement) => {
    const statementTemplate = `
    <div class="statement">
                <p class="statement-title">${statement.title}</p>
                <img class="statement-img" src=${statement.image} alt="">
                <p class="description">${statement.description}</p>
                <p class="author-info">ავტორის სახელი: ${statement.contactPersonName}</p>
                <p class="author-info">საკონტაქტო ნომერი: ${statement.contactPersonNumber}</p>
                <button type="button" class="deleteBtn" id="addBtn">Delete</button>
    </div>`;
    petList.innerHTML += statementTemplate;
}
let deleteBtn = document.querySelector('.deleteBtn')
deleteBtn.addEventListener('click', ()=> {
    statementsAsArray.slice(i,1)
})


const appendAllStatements = (statements) => {
    // for (const statement of statements) {
    //     appendStatement(statement);
    // }
    for (let i = 0; i<statements.length; i++) {
        appendStatement(statements[i]);
    }
}

appendAllStatements(statementsAsArray);

btn.addEventListener('click',()=>{
    petList.innerHTML = "";
    if (search.value ==='') {
        appendAllStatements(array);
        return;
    }
    const result = array.filter(function(left){
        // ეს მეთოდი მარტო ზუსტ შემთხვევებს აბრუნებს
        //return left.title === search.value
        // ეს კიდე ყველას რომელიც სერჩი ინფუთს შეიცავს
        return left.title.includes(search.value)
    });

    //ეს იგივეა ოღონდ  filter  ფუნქციაა ხელით დაწერილი
    // const result = [];
    // for (let i = 0; i < array.length; i++) {
    //     if (array[i].title === search.value) {
    //         result.push(array[i])
    //     }
        
    // }

    petList.innerHTML = "";
    appendAllStatements(result);
})