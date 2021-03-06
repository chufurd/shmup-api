const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let shmups = {
  'ikaruga': {
    'developer':  'Treasure',
    'director':  'Hiroshi Iuchi',
    'releaseDate':  '12/20/2001'
  },
  'battle garegga': {
    'developer':  'Raizing',
    'director':  'Kazuyuki Nakashima',
    'releaseDate':  '02/03/1996'
  },
  'unknown':{
    'developer':  'unknown',
    'director':  'unknown',
    'releaseDate':  'unknown'
  },
  'batsugun': {
    'developer':  'Topplan',
    'director':  'Junya Inoue',
    'releaseDate':  '12/?/1993'
  },
  'strikers 1945': {
    'developer':  'Psikyo',
    'director':  'Naozumi Yorichika',
    'releaseDate':  '07/15/1995'
  },
  'dodonpachi': {
    'developer':  'Cave',
    'director':  'Akira Wakabayashi',
    'releaseDate':  '02/05/1997'
  }
}
let garegga = {

}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/shmups/:shmupName',(request, response) =>{
    const shName = request.params.shmupName.toLowerCase()
    if(shmups[shName]){
      response.json(shmups[shName])
    }else{
      response.json(shmups['unknown'])
    }
    response.json(shmups[shName])
})
app.listen(process.env.PORT || PORT, () =>{
    console.log(`server running on port ${PORT}`)
})
