import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

const person = [
  {
    id: 1,
    name: 'Luke',
    date: '2019-05-30T17:30:31.098Z',
  },
  {
    id: 2,
    name: 'Mike',
    date: '2019-05-30T18:39:34.091Z',
  },
  {
    id: 3,
    name: 'Gaz',
    date: '2019-05-30T19:20:14.298Z',
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <App person={person} />
)
