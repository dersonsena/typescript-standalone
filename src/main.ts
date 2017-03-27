import { Horse } from './horse';
import { Dog } from './dog';

let myHorse = new Horse();
myHorse.setName('Little Horse');
console.log(myHorse.walk());
console.log(myHorse.sleep());

let myDog = new Dog();
myDog.setName('Pretty dog');
console.log(myDog.walk());
console.log(myDog.sleep());