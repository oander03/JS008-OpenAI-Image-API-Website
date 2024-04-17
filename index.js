const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();
const port = Number(process.env.PORT) || 5000;
//const cors = require('cors');

const app = express();

//app.use(cors());

//Enable body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Set static folder
app.use(express.static(path.join(__dirname, 'public')))


app.use('/openai', require('./Routes/openaiRoutes.js'));

app.listen(port, () => console.log('Server started on port ' + port));


//cd 'file name'  - to change directory 
//npm run dev

//git add .

//git commit
//  press i for insert
//  write message
//  press esc to escape out of insert
//  :wq

//      or: git commit -m "update"

//git push



//git checkout https://github.com/Hydroset/openai.git
//git pull
