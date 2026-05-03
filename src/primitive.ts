// JS-TS
//JS:string ,number boolean ,null ,undefined ,symbol
// TS:never,unknown,any,void
let userName:string="mesbah123" //explacitly declare the type of variable
let isAdmin=true  //implicitly declare the type of variable
let age:number=30
let course: string = "next level web development"
// example of tuple and mixedArr
let mixedArr: (string|number|boolean)[] = [1, "mesbah", true, 2, "typescript", false]
let tuple: [string, number, boolean] = ["mesbah", 30, true]
// reference type object example
let user: {
  name: string,
  age: number,
  isAdmin: boolean
} = {
    name: "mesbah",
    age: 30,
    isAdmin: true
}
// type define korle by default required houe jai jodi kono ekta key missing thake tahole error dibe

// Same example with optional property
let user2: {
  name: string,
  age: number,
  isAdmin?: boolean // optional property
} = {
    name: "mesbah",
    age: 30
    // isAdmin is optional, so it can be omitted
}
// note: if you define a type explicitly, the object should follow that structure
// but object er kono ekta value jodi change korte dite na chai ,tahole amra explicitly sei exact value assign korte pari
let user3: {
  name: 'mesbah'; // exact value
  age: number;
  isAdmin: boolean;
} = {
  name: 'mesba', // must be "mesbah"//Type '"mesba"' is not assignable to type '"mesbah"
  age: 30,
  isAdmin: true,
};
