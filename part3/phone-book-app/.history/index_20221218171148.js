require('dotenv').config()
const express = require('express')
const app = express()
var morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const Person = require('./models/person')

mongoose.set('strictQuery', false)

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

morgan.token("data", (request, response) => {
  return request.method === "POST" ? JSON.stringify(request.body) : " ";
});

app.use(express.static('build'))

app.use(requestLogger)

app.use(cors())

app.use(express.json())

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :data")
);

app.get('/api/persons', (request, result) => {
  Person.find({}).then(persons => {
    result.json(persons)
  })

})

app.get('/api/person/:id', (request, response, next) => {
  Person.findById(request.params.id)
    .then(person => {
      if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => {
      next(error)
    })
})

app.put('/api/person/:id', (request, response, next) => {

  const person = {
    name: request.name,
    number: request.number,
  }

  Person.findByIdAndUpdate(request.params.id, person, { new: true })
    .then(updatedPerson => {
      response.json(updatedPerson)
    })
    .catch(error => next(error))
})


//post request
app.post('/api/persons', (request, response) => {
    const { name, number } = request.body

    const person = new Person ({
      name: name,
      number: number,
    })

    person
      .save()
      .then(savedPerson => {
        response.json(savedPerson)
  })

})

app.get('/info', (request, response) => {
    response.send('<p>Phone-book has info for ' + persons.length + ' people</p><p>' + new Date() + '</p>')
  })

app.delete('/api/person/:id', (request, response, next) => {
  console.log("first",request.params.id);
    Person.findByIdAndRemove(request.params.id)
      .then(result => {
        response.status(204).end()
        console.log("second",request.params.id);
      })
      .catch(error => next(error))
  })

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }
  
app.use(unknownEndpoint)
  
const errorHandler = (error, request, response, next) => {
    console.error(error.message)
  
    if (error.name === 'CastError') {
      return response.status(400).send({ error: 'malformatted id' })
    }
  
    next(error)
  }
  
app.use(errorHandler)  
  const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})