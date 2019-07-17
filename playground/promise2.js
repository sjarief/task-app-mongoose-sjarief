require("../db/mongoose")
const Task = require("../models/task")

// Task.findByIdAndDelete("5d2c22b35374c015948bd3e8").then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskCount = async(id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskCount("5d2c0cd57cc5cb154cf48778").then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
