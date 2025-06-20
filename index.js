const express =require("express")
const app = express();
const dotenv= require("dotenv");
const bodyParser = require("body-parser");
const cors= require("cors")
const AuthRouter =require("./Routes/Authrouter");
const  Taskrouter  = require("./Routes/Task.route");

app.use(cors({
  origin: 'http://localhost:5173', // or '*', if you want to allow all origins (less secure)
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // include DELETE here
  credentials: true // if you're using cookies/auth
}));

require("./Models/db")

app.use(bodyParser.json())


const PORT =process.env.PORT
app.use('/auth', AuthRouter);
app.use('/api/task', Taskrouter)
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT} `)
})