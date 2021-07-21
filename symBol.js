// String, Boolean এর মতই symbol হচ্ছে একটি ডাটা টাইপ।

//Creating symbol

// var symbol1 = Symbol();
// console.log(symbol1);

// var symbol2 = Symbol();
// console.log(symbol2);

// console.log(symbol1 === symbol2);
//result false

//magic points 
// 1.প্রতিবার symbol  ভিন্ন ভিন্ন ভ্যালু রিটার্ন  করে। তাই ডিবাগিং করার সুবিধার্থে একটি description  দিতে হয়।
//উদাহরণ:
// var symbol1 = Symbol("This is Symbol 1");
//here "this is symbol1" is description of Symbol"
// console.log(symbol1);

// var symbol2 = Symbol("This is Symbol 2");
// console.log(symbol2);

// 2.new দিয়ে কখনো create করা যায় না।
// 3.এটা সবসময় unique  হয়।
// 4.value হিডেন থাকে।
// কিন্তু আমরা single TOn হিসেবে ইউজ করতে পারি।
//Example : 
// const nameOne = Symbol.for("name1");
// const nameTwo = Symbol.for("name1");

// console.log(nameOne === nameTwo);

//5.কোনো object এর property হিসেবে use করতে পারি
//Example
// var country = Symbol.for("Country");

// var person = {
//   name : "sumon",
//   age : 18,
//   [country]: "Bangladesh",
// };

// console.log(person);

// Why do wee need Symbols???
//(উদাহরণ  : ১)
// var object ={};

// object.name = "javascript";
// object.estd = 1995;
// object[Symbol("founder")] = "Brendan Eich";
// console.log(object);
// // symbol add করতে হলে third bracket use করতে হবে। অর্থাৎ ব্রাকেট নোটেশন ব্যবহার করতে হবে
// for (key in  object){
//   console.log(key);
// }
// এখানে symbol কে ignore করে iteration হবে।
// অর্থাৎ কোনো object এর property কে ignore করে iteration করতে হলে সিম্বল ইউজ করতে হবে। 

//উদাহরণ: ২
// //prototype এর মধ্যে override করতে symbol use করা হয়। 
// var includes = Symbol("My own array includes method");
// Array.prototype[includes] = () =>{
//   console.log("this is my Array which includes function");
// } ;

// var myArray = [1,2,3,4];
// console.log(myArray.includes(2));

// myArray[includes]();
// console.log(Array);

// উদাহরণ : ৩

// var title = "javaScript";
// console.log(title.search("Script"));

//১। সাধারণ দৃষ্টিতে "title"  তো কোনো object না, কিন্তু তবুও title দ্বারা আমরা title.search() access  করতে পারি কারণ 
// ২। এখানে "title" - new String("javaScript") এ রুপান্তর হয়। 
// ৩। converting parameter into regExp(regular Expression )
// ৪। regExp এর মধ্যে title.search() এর implementation আছে  কিনা? 


//কিন্তু যদি আমরা seacrh এর মধ্যে একটা object parameter হিসেবে নেই তখন কি ঘটে দেখা যাক।

// class Product{
//   constructor(title){
//     this.title = title;
//   }
//   [Symbol.seacrh](string){
//     return string.indexOf(this.title) >= 0 ? "Found" : "Not Found";
//   }
  
// }

// const laptop = new Product("laptop");


// console.log("hp laptop".search(laptop));

// উদাহরণ :৪ 
// Symbol কে কখনো আমরা  ডিলিট  করতে পারবো  না।

const myFunction = () =>{
  const PVT = Symbol("my private value ");
  
  return {
    modify(obj){
      obj[PVT] = "sumon";
    },
    output(obj){
      return obj[PVT];
    }
    
  };
  
  
  
};
const value = myFunction();
var obj = {a:1, b:2};
console.log(obj);
console.log(value.modify(obj));
console.log(value.output(obj));
delete obj.a;
delete obj["Symbol(my private value)"];
console.log(obj);