const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://wainhouse:${password}@cluster0.hralzxg.mongodb.net/phonebookApp?retryWrites=true&w=majority`

const personSchema = new mongoose.Schema({
      name: String,
      number: String,
})

const Person = mongoose.model('Person', personSchema)

mongoose
  .connect(url)
  .then((result) => {
    console.log('connected')

    const person = new Person({
      name: "Michael Bolton", 
      number: "040-6756757",
    })

if (process.argv === 3) {
  Person.find({}).then((result) => {
    console.log('phone-book:')
    result.forEach((person) => {
      console.log(person.name, person.number)
    })
    mongoose.connection.close()
  })
}    

    // Note.find({important: true}).then(result => {
    //     result.forEach(note => {
    //       console.log(note)
    //     })
    //     mongoose.connection.close()
    //   })
 

    return person.save()
  })
  .then(() => {
    console.log('Person added!')
    return mongoose.connection.close()
  })
  .catch((err) => console.log(err))
