// // index.js
// const express = require('express')
// const app = express()
// const PORT = 4000


// app.get('/home', (req, res) => {
//   res.status(200).json('Welcome, your app is working well');
// })


// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });

// // Export the Express API
// module.exports = app

const express = require("express");   
const cors = require("cors");

const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app


