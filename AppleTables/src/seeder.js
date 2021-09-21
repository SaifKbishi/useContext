

const userModel=require('./models/user.model')
const users=require('../src/usersdata');



const importData = async () => {
  try {
    await userModel.deleteMany()
    const createdUsers = await userModel.insertMany(users)
    console.log('Data Imported!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://firstUser:FG12XZ123@cluster0.y3jty.mongodb.net/auth?retryWrites=true&w=majority',
mongoose.connect('mongodb+srv://firstUser:FG12XZ123@cluster0.y3jty.mongodb.net/Apple?retryWrites=true&w=majority',
{
 useNewUrlParser: true,
 useCreateIndex: true,
 useUnifiedTopology: true,
 useFindAndModify: false, 
});




importData()