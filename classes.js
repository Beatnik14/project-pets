class Statement {
    constructor(title, contactPersonName, contactPersonNumber, address, description, pet, price, image) {
        this.image = image;
        this.title = title;
        this.contactPersonName = contactPersonName;
        this.contactPersonNumber = contactPersonNumber;
        this.address = address;
        this.description = description;
        this.pet = pet;
        this.price = price;
    }
}

class Pet {
    constructor(category, age, gender) {
        this.category = category;
        this.age = age;
        this.gender = gender;
    }
}

class Cat extends Pet {
    constructor(category, age, gender, toiletFriendly) {
        super(category, age, gender);
        this.toiletFriendly = toiletFriendly;
    }
}



class Dog extends Pet {
    constructor(category, age, gender, isFriendly){
        super(category, age, gender);
        this.isFriendly = isFriendly;
    }
}

class Raccon extends Pet {
    constructor(category, age, gender, eatsOtherSmallAnimals){
        super(category, age, gender);
        this.eatsOtherSmallAnimals = eatsOtherSmallAnimals;
    }
}

class Parrot extends Pet {
    constructor(category, age, gender, canTalk){
        super(category, age, gender);
        this.canTalk = canTalk;
    }
}
