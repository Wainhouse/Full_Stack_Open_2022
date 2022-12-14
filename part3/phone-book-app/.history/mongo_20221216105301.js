const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://wainhouse:${password}@cluster0.hralzxg.mongodb.net/phonebookApp?retryWrites=true&w=majority`

mongoose.set("strictQuery", false);

mongoose
  .connect(url)
  
const personSchema = new mongoose.Schema({
      name: String,
      number: String,
})

const Person = mongoose.model('Person', personSchema)


if (process.argv === 3) {
  Person.find({}).then((result) => {
    console.log('phone-book:')
    result.forEach((person) => {
      console.log(person.name, person.number)
    })
    mongoose.connection.close()
  })
}    

if(process.argv > 3) {
  const name = argv[3]
  const number = argv[4]

  const person = new Person({
    name: name, 
    number: number,
  })
  person.save()
  .then((result) => {
    console.log(`${name} added!`)
    mongoose.connection.close()
  })

}
  
