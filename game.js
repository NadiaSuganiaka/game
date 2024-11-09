class Character {
    #name;
    #health;

    constructor(name, health){
        this.#name = name;
        this.#health = health;
    }

    attack(){
        return 10;
    }

    takeDamage(damage){
        return this.#health -= damage;
    }

    getHeal(heal){
        return this.#health += heal;
    }

    isAlive(){
        if (this.#health > 0){
            return 'live';
        } else{
        return 'dead';
        }
    }

    getHealth(){
        return this.#health;
    }

    getName(){
        return this.#name;
    }

    getWeapon(weapon){
        let sword = 1;
        let dagger = 2;
        let bow = 3;
        if(weapon == sword){
            return this.#health -= 10;
        }else if(weapon == dagger){
            return this.#health -= 15;
        }else if(weapon == bow){
            return this.#health -= 20;
        }
    }
}

class Warrior extends Character{
    constructor(name,health) {
        super(name,health);
    }

    attack(){
        return super.attack() * 2;
    }
    
}

class Mage extends Character{
    constructor(name,health){
        super(name,health);
    }

    attack(additionalDamage){
        return super.attack() + additionalDamage;
    }
}

let character = new Character('Bob', 100);
let warrior = new Warrior('Tom', 100);
let mage = new Mage('Den', 100);
console.log (character);
console.log (character.attack());
console.log (character.takeDamage(20));
console.log (character.getHealth());
console.log (character.getHeal(10));
console.log (character.getWeapon(1));
console.log (character.isAlive());
console.log (character.getName());

console.log (warrior);
console.log (warrior.attack());
console.log (warrior.takeDamage(50));
console.log (warrior.getHealth());
console.log (warrior.getHeal(10));
console.log (warrior.getWeapon(2));
console.log (warrior.isAlive());
console.log (warrior.getName());

console.log (mage);
console.log (mage.attack(30));
console.log (mage.takeDamage(70));
console.log (mage.getHealth());
console.log (mage.getHeal(10));
console.log (mage.getWeapon(3));
console.log (mage.getWeapon(3));
console.log (mage.isAlive());
console.log (mage.getName());

