const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors')
const path = require('path')

const routes = require('./routes/routes')

const app = express();

mongoose.connect('mongodb+srv://valdir:94219489@omnistack-9-potcy.mongodb.net/semana09?retryWrites=true&w=majority',{  useNewUrlParser: true ,  useUnifiedTopology: true})

app.use(cors());
app.use(express.json());
app.use('/files',express.static(path.resolve(__dirname,'..','uploads')));
app.use(routes);
    


app.listen(3333);