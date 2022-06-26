// How to dev - npm install && npm run dev

import express from 'express';
import path from 'path'

const app = express()

// Express (4.16+) no need bodyParser anymore 
app.use(express.json()) // JSON bodies
app.use(express.urlencoded({
  extended: true
})); // URL-encoded bodies

app.use(express.static(path.resolve()))

// No Need
// app.get('/', (req, res) => {
//   res.sendFile(path.join(path.resolve(), '/index.html'))
// });

app.listen('8000', () => {
  console.log(`Server is running at https://localhost:8000`)
});
