const DataBase = []
let id = 1


const findAllUsers = () => {
    return DataBase
}

const findUserById = (id) => {
const user = DataBase.find(item => item.id == id)
return user
}


const createUser = (obj) => {
    const newUser = {
        id: id++,
        first_name: obj.first_name,
        last_name: obj.last_name,
        email: obj.email,
        password: obj.password,
        birthday: obj.birthday
    }
    DataBase.push(newUser)
    return newUser
}

module.exports = {
    findAllUsers,
    findUserById,
    createUser
}