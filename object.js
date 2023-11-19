const user = {
    name: 'John',
    age: 24,
     city: 'New York'   
};

const {name, age} = user;

const keys = Object.keys(user);

keys.map((key)=>{
    console.log(`${key}: ${user[key]}`);
})

// keys.forEach((key)=>{
//     console.log(`${key}: ${user[key]}`)
// })

// entries.forEach(([key, value]) =>{
//     console.log(`${key}:${value}`)
// });

// const entries = Object.entries(user);

// console.log(Object.entries(user))

// console.log(Object.values(user)); 


