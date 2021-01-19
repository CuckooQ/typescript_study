/**
 * Types
 */
const isValid: boolean = false;
const num: number = 0;
const str: string = "cuckoo";
const arr: Array<string> = new Array<string>();
const tuple: [string, number] = ["cuckoo", 100];
enum sortOrder {
  idDesc,
  idAsc,
  nameDesc,
  nameAsc,
}
class Administrator {
  id: number = 0
  name: string = ""
  authorization: string = "all"

  constructor(name: string) {
    this.id = Math.random();
    this.name = name;
  }
}
const admin: Administrator = new Administrator("cuckoo");
const logAdmin = (): void => {
  console.log(admin);
}
const undif: undefined = undefined;
const nullObj: null = null;
const anyone: any = null;
let naver: never;
let whatIsIt: unknown;
console.log(isValid);
console.log(num);
console.log(str);
console.log(arr);
console.log(tuple);
console.log(sortOrder);
logAdmin()
console.log(undif);
console.log(nullObj);
console.log(anyone);
// console.log(naver);
console.log(whatIsIt);

/**
 * Union & Intersection
 */
class animal {
  name: string = ""
  gender: string = ""
  age: number = 0
}
class human {
  mission: string = ""
  religion: string = ""
}

const unionCreature: animal | human = {
  name: "cuckoo",
  gender: "male",
  age: 100,
} 
console.log(unionCreature);
const intersectionCreature: animal & human = {
  name: "cuckoo",
  gender: "male",
  age: 100,
  mission: "be a good man",
  religion: "none"
} 
console.log(intersectionCreature);

/**
 * Type Functions
 */
// Type set
let typedSetObj: boolean = false;

// Type error
// typedSetObj = ""; 
// → error

// Type inference
let nonTypedSetObj = "";
// nonTypedSetObj = {};
// → error

// Type assertion
let assertedObj = "" as string;
assertedObj = "asserted";

// Type Guard
let isString = (str: string | number) : str is string => {
  return typeof str === "string";
} 
console.log(isString("str"));

/**
 * Interface
 */
// Common interface
interface IUser {
  name: string,
  mailAddress: string,
  habit: string,
  age: number,
}

class User implements IUser {
  name: string = "Cuckoo Q";
  mailAddress: string = "jaeyong4536@gmail.com";
  habit: string = "internet";
  age: number = 100;

  constructor(name: string){
    this.name = name;
  }
}

// Function interface
interface IGetUser {
  (name: string): IUser // call signature
}
  
const getUser: IGetUser = (name: string) => {
  return new User(name);
}
  
console.log(getUser("Cuckoo Loo"));

// Constructor interface 
interface IUserConstructor {
  new (name: string): User // construct signature
}

const makeUser = (user: IUserConstructor, name: string) => {
  return new user(name);
}

console.log(makeUser(User, "cuckoo P"));

// Indexable interface
interface IAnimals {
  [animal: number]: string // index signature
}

const animals: IAnimals = ["cat", "dog", "chicken"];

console.log(animals);

interface IDict {
  [key: string]: string;
}

const dict: IDict = {
  key1: "value1",
  key2: "value2",
  key3: "value3"
};

console.log(dict);
console.log(dict["key1"]);
console.log(dict["key2"]);

let anyKey: keyof IDict; 
anyKey = "key1";
console.log(anyKey);
anyKey = "key2";
console.log(anyKey);

// Extended interface
interface IDrawing {
  obj: string
  color: string
}

interface IScatch extends IDrawing {
  pen: string
}

class ScenaryScatching implements IScatch {
  obj: string = ""
  color: string = ""
  pen: string = ""

  constructor (obj: string, color: string, pen: string) {
    this.obj = obj;
    this.color = color;
    this.pen = pen;
  }
}

const homeScatching: ScenaryScatching = new ScenaryScatching("home", "white", "4B");
console.log(homeScatching);

// if it's not, error occur.
export {};