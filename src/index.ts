// common interface
interface IUser {
  name: string,
  mailAddress: string,
  habit: string,
  age: number,
}

class User implements IUser {
  name= "Cuckoo Q";
  mailAddress="jaeyong4536@gmail.com";
  habit="internet";
  age=100;

  constructor(name: string){
      this.name = name;
  }
}

// function interface
interface IGetUser {
    (name: string): IUser // call signature
  }
  
  const getUser: IGetUser = (name: string) => {
    return new User(name);
  }
  
  console.log(getUser("Cuckoo Loo"));

// constructor interface 
interface IUserConstructor {
  new (name: string): User // construct signature
}

const makeUser = (user: IUserConstructor, name: string) => {
  return new user(name);
}

console.log(makeUser(User, "cuckoo P"));

// if it's not, error occur.
export {};