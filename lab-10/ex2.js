
class User{
    constructor(name){
        this.name=name;
    }
    logger(){
        console.log("Hello "+this.name);
    }
}

class DecoratedUser{
    constructor(user,street,city){
        this.user=user;
        this.name=user.name;
        this.street=street;
        this.city=city;
    }
    logger(){
        console.log("Hello "+this.name+this.street+this.city);
    }
}

const user = new User("Kelly");
user.logger();
const decorated = new DecoratedUser(user, "Broadway", "New York");
decorated.logger();
