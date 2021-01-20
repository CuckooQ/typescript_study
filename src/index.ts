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
// enum의 값이 변경될 수 있는 점을 개선한 constant 타입
const SortOrder = {
  idDesc: 0,
  idAsc: 1,
  nameDesc: 2,
  nameAsc: 3,
} as const;
type SortOrder = typeof SortOrder[keyof typeof SortOrder];
console.log(SortOrder);
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

/**
 * Type Aliases
 */
type TUser = {
  id: number
  name: string
  authorization: string
}

const typedUser: TUser = {
  id: 0,
  name: "cuckoo",
  authorization: "all"
}

console.log(typedUser);

type SomeTypes = string | number | boolean;
const text: SomeTypes = "str";

/**
 * Generic
 */
// normal
const getName = <T>(name: T) => name;
function getId<T>(id: T) { return id; } 
console.log(getName<string>("test"));
console.log(getId<number>(0));

interface Food<T> {
  name: string,
  taste: T
}
class Kimchi implements Food<string> {
  name: string = "kimchi";
  taste: string = "good";
}
class Oyster implements Food<number> {
  name: string = "oyster";
  taste: number = -9999999
}

// extends
const getSong = <T extends string | number>(name: T) => name;
getSong<string>("warriors");
// getSong<boolean>(false); → error
type U = string | number | boolean;
type CsonditionType<T> = T extends U ? string : never; 
interface SoccerTeam<T extends boolean> {
  name: string,
  score: number,
  topPlayer: T extends true ? string : null 
}
class Tottenham implements SoccerTeam<true> {
  name: string = "Tottenham Hotspur F.C";
  score: number = 100;
  topPlayer: string = "son";
}

// extends infer
type InferableType<T> = T extends infer R ? R : null;
const infered: InferableType <number> = 0;

/**
 * Class
 */
// Access Modifier
class Access {
  public name: string = "";
  protected authorization: string = "";
  private key: string = "";  
  protected constructor (name: string) {
    this.name = name;
  }
}
class PrivateAccess extends Access {
  name: string = "private";
  authorization: string = "secret";
  administrator: string = "cuckooQ";
  // key: string = ""; → error
  constructor(name: string){
    super(name);
  }
}
const descktopAcces: PrivateAccess = new PrivateAccess("desktop");
console.log(descktopAcces.name);
console.log(descktopAcces.authorization);
console.log(descktopAcces.administrator);

// Etc modifier
class ExistStaticParam {
  private static staticParam: string = "static";
  public readonly score: number = 0;
}
const test: ExistStaticParam = new ExistStaticParam();
console.log(test);

// Abstract Class
abstract class Dream {
  abstract name: string;
  time: number = 0;
  abstract recall(): string;
  awake = (motivation: boolean): boolean => motivation;
}
class BadDream extends Dream{
  name: string = "falling";
  recall = (): string => "ㅜㅜ";
}
const badDream: BadDream = new BadDream();
console.log(badDream);
console.log(badDream.recall());
console.log(badDream.awake(false));

/**
 * Optional Keyword 
 */ 
const setTime = (datetime?: string): string => {
  return datetime ? datetime : Date.now().toString();
}
console.log(setTime());

// if it's not, error occur.
export {};