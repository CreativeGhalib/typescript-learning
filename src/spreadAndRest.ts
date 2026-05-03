// //Spread and rest operator
// //array er khtre spread operator er example
// const arr1: number[] = [1, 2, 3];
// const arr2: number[] = [4, 5, 6];
// const combinedArr: number[] = [...arr1, ...arr2]; // spread operator ব্যবহার করে দুইটা array combine করা হচ্ছে
// console.log(combinedArr); // output: [1, 2, 3, 4, 5, 6]

// //object er khtre spread operator er example
// const user1 = {
//   name: "mesbah",
//   age: 30,
// };
// const user2 = {
//   isAdmin: true,
// };
// const combinedUser = { ...user1, ...user2 };
// rest operator example with a function
const sendInvites = (...xxxs: string[])=> {
  xxxs.forEach((xxx: string) => {
    console.log(`Inviting ${xxx}`);
  });
  console.log(xxxs);
  console.log(`Invites sent to: ${xxxs}`);
};
sendInvites("Alice", "Bob", "Charlie"); // output: ["Alice", "Bob", "Charlie"]
// void keno use korechi?
//  karon function er return type void, mane function kono value return korbe na, just console.log kore dekhabe je amra kake invite pathacchi. rest operator use kore amra onek gula argument ke ekta array te convert kore niye ashte pari, ebong function er moddhe oi array ke use korte pari.
