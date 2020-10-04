const petList = document.querySelector('.pet-list');
const btn = document.querySelector('.btn');
const search = document.getElementById('search');

const deleteBtn = document.getElementById('deleteBtn');
const deleteInput = document.getElementById('deleteInput');

// const statement1 = new Statement('ჩუქდება თეთრი კნუტი, 1 თვის', 'ლუკა', '599931926', 'თბილისი', 'არის ძალიან საყვარელი', null, 0, 'https://envato-shoebox-0.imgix.net/2d04/0e8a-f427-11e1-952c-842b2b692e1a/2100817-001.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=1110052f8c6d4715316ccbdd8eaad0fb');
// let statementsArray = [statement1]

// localStorage.setItem('statements',JSON.stringify(statementsArray))
// let emptyArray = [];
// if (localStorage.getItem('statements') === null) {
//     localStorage.setItem('statements',JSON.stringify(emptyArray))
// }
const statementsAsString = localStorage.getItem('statements');
let statementsAsArray = JSON.parse(statementsAsString);
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
               
    </div>`;
    petList.innerHTML += statementTemplate;
}



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
        appendAllStatements(statementsAsArray);
        return;
    }
    const result = statementsAsArray.filter(function(left){
        // ეს მეთოდი მარტო ზუსტ შემთხვევებს აბრუნებს
        //return left.title === search.value
        // ეს კიდე ყველას რომელიც სერჩი ინფუთს შეიცავს
        return left.title.includes(search.value)
    });

    //ეს იგივეა ოღონდ  filter  ფუნქციაა ხელით დაწერილი
    // const result = [];
    // for (let i = 0; i < statementsAsArray.length; i++) {
    //     if (statementsAsArray[i].title === search.value) {
    //         result.push(statementsAsArray[i])
    //     }
        
    // }

    petList.innerHTML = "";
    appendAllStatements(result);
})


deleteBtn.addEventListener('click', ()=> {
    petList.innerHTML = "";
    if (deleteInput.value ==='') {
        appendAllStatements(statementsAsArray);
        return;
    }
   
    
    for (let i = 0; i < statementsAsArray.length; i++) {
        if (statementsAsArray[i].title === deleteInput.value) {
            statementsAsArray.splice(i,1);
            localStorage.setItem('statements',JSON.stringify(statementsAsArray))
            statementsAsArray = JSON.parse(localStorage.getItem('statements'))
        }
    }
    
    appendAllStatements(statementsAsArray);
})









