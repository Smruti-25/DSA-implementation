const arr = [
  { firstName: "elon", lastName: "musk", age: 37 },
  { firstName: "deepika", lastName: "padukon", age: 20 },
  { firstName: "akshay", lastName: "kumar", age: 20 },
  { firstName: "donald", lastName: "trump", age: 50 }
]

//give me all the first names
console.log(arr.map((x) => x.firstName));

//give me number of people with the age { '20': 2, '37': 1, '50': 1 }
console.log(arr.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {}))

//give me first names of people whose age is less than 30
console.log(arr.filter((x) => x.age < 30).map((x) => x.firstName));

//using reduce
console.log(arr.reduce(function (acc, curr) {
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []));