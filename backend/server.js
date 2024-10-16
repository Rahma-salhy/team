const User= require ('./model/index.js');
const express =require('express') ;
const mongoose =require('mongoose') ;
const loginRouter =require("./routes/loginrouter.js")
const signupRouter =require("./routes/signuprouter.js")
const router2 =require("./routes/triprouter.js")
const cors = require ("cors")



const app = express();
app.use(cors())

app.use(express.json());
app.use(express.urlencoded())

mongoose.connect('mongodb://localhost:27017/travel-agency')
  .then(() => {
    console.log("Connected to MongoDB successfully!");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });


  app.use('/api', signupRouter)
  app.use('/api', loginRouter)
  app.use('/api', router2)
  


 




const PORT =  5000;
app.listen(PORT, (err) => {
  if(err)console.log(err);
  
  console.log(`Server is running on port ${PORT}`);
})
