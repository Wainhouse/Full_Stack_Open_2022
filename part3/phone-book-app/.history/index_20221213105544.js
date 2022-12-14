const express = require('express')
const app = express()

app.use(express.json())

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


app.get('/', (request, response) => {
    response.send('<h1>Hello Persons!</h1>')
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
    const body = request.body
  //error handling
    if (!body.number || !body.name) {
      return response.status(400).json({ 
        error: 'name must be unique' 
      })
    }

    const personExists = persons.find((person) => person.name === body.name)
  
    if (personExists) {
    return response.status(400).json({
      error: "name must be unique",
    })
  }

    const person = {
      name: body.name,
      number: body.number,
      id: generateId()
    }
  
    persons = person.concat(person)
  
    response.json(person)
  })

  app.get('/info', (request, response) => {
    response.send('<p>Phone-book has info for ' + persons.length + ' people</p><p>' + new Date() + '</p>')
  })
  
  app.get('/api/persons', (request, response) => {
    response.json(persons)
  })

  app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    //error handling
    response.status(204).end()
  })

  const PORT = 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })

