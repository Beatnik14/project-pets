const petList = document.querySelector('.pet-list');
const btn = document.querySelector('.btn');
const search = document.getElementById('search');

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
 

const statement1 = new Statement('ჩუქდება თეთრი კნუტი, 1 თვის', 'ლუკა', '599931926', 'თბილისი', 'არის ძალიან საყვარელი', null, 0, 'https://envato-shoebox-0.imgix.net/2d04/0e8a-f427-11e1-952c-842b2b692e1a/2100817-001.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=1110052f8c6d4715316ccbdd8eaad0fb');

const statement2 = new Statement('ჩუქდება ლეკვი, 2 თვის', 'საბა', '599931926', 'თბილისი', 'უყვარს თამაში', null, 0, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/month-pure-breed-beagle-puppy-on-gray-screen-royalty-free-image-865226542-1566913909.jpg?crop=1.00xw:0.752xh;0,0.175xh&resize=1200:*');

const statement3 = new Statement('იყიდება ენოტი, 3 თვის', 'საბა', '599931926', 'თბილისი', 'არის ძალიან მეგობრული', null, 0, 'https://cdn.mos.cms.futurecdn.net/YYH9o4wmSXJfvbzRTq5BTY-1200-80.jpg');

// appendStatement(statement1);

let array = [statement1,statement2,statement3]

const appendAllStatements = (statements) => {
    for (const statement of statements) {
        appendStatement(statement);
    }
    // for (let i = 0; i<statements.length; i++) {
    //     appendStatement(statements[i]);
    // }
}

appendAllStatements(array);

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