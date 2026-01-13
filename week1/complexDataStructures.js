//object
let user={
  name:"Prakhar",
  age:12,
  isMillionaire:false,
  gender:"male",
};
// console.log("Prakhar is a millionaire: "+user.isMillionaire);
// console.log("Prakhar is a millionaire: "+user["isMillionaire"]);
function greet(user){
  console.log("Hello "+user.name+" your age is "+user.age);
}
// greet(user);
function greet1(user){
  let title="mr";
  if(user.gender==="female" || user.gender==="Female"){
    title="mrs";
  }
  // console.log("Hello "+title+" "+user.name+" your age is "+user["age"]);
}
greet1(user);
function canVote(user){
  if(user["age"]>=18){
    console.log(user.name+ " can vote");
  }else {
    console.log(user.name+ " cannot vote");
  }
}
// canVote(user);

//Arrays
const userss = ["prakhar", "pragyan", "diljeet"];
const totalUsers = userss.length;
const firstUser = userss[0];
// console.log(totalUsers);
// console.log(firstUser);

//nesting ie array k ander objects k ander array and so on
const player={
  name:"Prakhar",
  cities:["Hazaribag","Bokaro","Mysore","Banglore","Kolkata",{
    tuition:["pw","nikhil-sir","unacademy","apni kaksha"]
  }]
}
// console.log(player.cities[5].tuition[3]);


//Array of objects
const users = [{
		name: "Harkirat",
		age: 21,
    gender:"male",
	}, {
		name: "rama",
		age: 22,
    gender:"female"
	},{
		name: "raman",
		age: 12,
    gender:"male"
	},{
		name: "sakshi",
		age: 22,
    gender:"female"
	},{
		name: "hari",
		age: 24,
    gender:"male"
	},{
		name: "prakhar",
		age: 22,
    gender:"male"
	}

]
// const user1 = users[0] 
// const user1Age = users[0].age
function vibeCheck(users){
  let newUsers=[];
  for(let i=0;i<users.length;i++){
    if(users[i].age>18 && (users[i].gender==="male" || users[i].gender==="Male")){
      newUsers.push(users[i]);
    }
  }
  for(let i=0;i<newUsers.length;i++){
    console.log(newUsers[i]);
  }
}
// vibeCheck(users);

const result = users.filter(
  u => u.age > 18 && u.gender === "male"
);
// console.log(result);

//Object of objects
const user1 = {
	name: "harkirat",
	age: 19,
	address: {
		city: "Delhi",
		country: "India",
		address: "1122 DLF"
	}
}

const city = user1.address.city;
console.log(city);
// Create a function that takes an array of objects as input,
// and returns the users whose age > 18 and are male
