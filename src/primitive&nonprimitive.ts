// জাভাস্ক্রিপ্ট থেকে টাইপস্ক্রিপ্ট
// জাভাস্ক্রিপ্ট: string, number, boolean, null, undefined, symbol
// টাইপস্ক্রিপ্ট: never, unknown, any, void
let userName:string="mesbah123" // ভেরিয়েবলের টাইপ স্পষ্টভাবে বলে দেওয়া হয়েছে
let isAdmin=true  // ভেরিয়েবলের টাইপ নিজে থেকেই বুঝে নিচ্ছে
let age:number=30
let course: string = "next level web development"
// tuple এবং mixed array-এর উদাহরণ
let mixedArr: (string|number|boolean)[] = [1, "mesbah", true, 2, "typescript", false]
let tuple: [string, number, boolean] = ["mesbah", 30, true]
// reference type object-এর উদাহরণ
let user: {
  name: string,
  age: number,
  isAdmin: boolean
} = {
    name: "mesbah",
    age: 30,
    isAdmin: true
}
// টাইপ define করলে default ভাবে property গুলো required হয়ে যায়; কোনো key missing থাকলে error দেবে

// optional property সহ একই ধরনের উদাহরণ
let user2: {
  name: string,
  age: number,
  isAdmin?: boolean // optional property
} = {
    name: "mesbah",
    age: 30
    // isAdmin optional, তাই এটা না দিলেও হবে
}
// note: টাইপ স্পষ্টভাবে define করলে object-কে সেই structure follow করতে হবে

// object-এর কোনো value যদি নির্দিষ্ট করে দিতে চাই, তাহলে exact value type হিসেবে assign করা যায়
let user3: {
  name: 'mesbah'; // exact value
  age: number;
  isAdmin: boolean;
} = {
  name: 'mesba', // অবশ্যই "mesbah" হতে হবে; Type '"mesba"' is not assignable to type '"mesbah"
  age: 30,
  isAdmin: true,
};

// readonly property-এর উদাহরণ
// readonly দিলে object create করার পর ওই property change করা যাবে না
let user4: {
  readonly name: string;// access modifier // readonly দিলে object create করার পর এই property change করা যাবে না
  age: number;
  isAdmin: boolean;
} = {
  name: "mesbah",
  age: 30,
  isAdmin: true,
};

// age change করা যাবে, কারণ age readonly না
user4.age = 31;

// name change করা যাবে না, কারণ name readonly
// user4.name = "mesba"; // error: "name" read-only property হওয়ায় assign করা যাবে না
// note: `.ts` file সরাসরি `node` দিয়ে run করা যায় না।
// আগে compile করতে হবে: `tsc "./src/primitive&nonprimitive.ts"` -> তারপর generated JavaScript file run করতে হবে
// অথবা সরাসরি run করতে চাইলে use করো: `npx ts-node "./src/primitive&nonprimitive.ts"` অথবা `npx tsx "./src/primitive&nonprimitive.ts"`

// literal type-এর উদাহরণ
// এখানে type হচ্ছে exact value "mesbah123"
// তাই এই variable-এ শুধু "mesbah123" value-টাই assign করা যাবে
let literalUserName: "mesbah123" = "mesbah123";
console.log(literalUserName);

// এটা করলে error দেবে, কারণ "mesbah" exact value "mesbah123" না
// literalUserName = "mesbah";
