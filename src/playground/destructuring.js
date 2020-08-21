
// const person = {
//   name: 'Rakesh',
//   age: 27,
//   location:{
//     city: 'Bangalore',
//     temp: 28
//   }
// }

// const {name, age, location} = person

// console.log(`${name} is ${age}. He is on ${location.city}`)

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }

// const {name: publisherName = 'Self-published'} = book.publisher

// console.log(publisherName)

const item = ['Coffee (hot)','$2.00', '$2.50','$2.75']

const [coffee, , price] = item

console.log(`A medium ${coffee} costs ${price}`)

