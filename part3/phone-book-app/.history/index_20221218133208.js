require('dotenv').config()
const express = require('express')
const app = express()
var morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

const Person = require('./models/person')

let persons = [
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  },
  { 
    "id": 5,
    "name": "Jade Wainhouse", 
    "number": "39-23-90345890"
  },
  { 
    "id": 6,
    "name": "Luke Skywalker", 
    "number": "12-12-1212"
  },
  { 
    "id": 7,
    "name": "Anikin Skywalker", 
    "number": "12-12-1212"
  },
  { 
    "id": 8,
    "name": " Jiajia", 
    "number": "12-45-56457567"
  }
]

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

app.use(express.static('build'))

app.use(requestLogger)

app.use(cors())

app.use(express.json())


morgan.token("data", (request, response) => {
  return request.method === "POST" ? JSON.stringify(request.body) : " ";
});

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :data")
);

app.get('/api/persons', (request, result) => {
  Person.find({}).then(persons => {
    result.json(persons)
  })

})


  app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    //error handling   
    if (person) {
      response.json(person)
    } else {
      response.status(404).end()
    }
  })

  const generateId = () => {
    const maxId = persons.length > 0
      ? Math.max(...persons.map(n => n.id))
      : 0
    return maxId + 1
  }

  //post request
  app.post('/api/persons', (request, response) => {
    console.log("started");
    const body = request.body
  //error handling
    if (!body.number || !body.name) {
      return response.status(400).json({ 
        error: 'name must be unique' 
      })
    }

    const personExists = persons.find((person) => person.name === body.name)
    //error handling
    if (personExists) {
    return response.status(400).json({
      error: "name must be unique",
    })
  }

    const person = {
      id: generateId(),
      name: body.name,
      number: body.number,
    }
  
    persons = persons.concat(person)
  
    response.json(person)
  })

  app.get('/info', (request, response) => {
    response.send('<p>Phone-book has info for ' + persons.length + ' people</p><p>' + new Date() + '</p>')
  })

  app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    //error handling
    response.status(204).end()
  })

  const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})