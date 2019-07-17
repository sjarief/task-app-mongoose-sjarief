const mongoose = require("mongoose")
 
mongoose.connect("mongodb://127.0.0.1:27017/task-manager-bejo-api", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})



// const task = new Task({
//     description: "Learn more",
//     completed: true
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log(error)
// })