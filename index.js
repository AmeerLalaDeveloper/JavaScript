let persons = [
    {
        id: 1111,
        firstName: "itay",
        lastName: "tur",
        age: 30
    },
    {
        id: 1112,
        firstName: "avi",
        lastName: "tur",
        age: 35
    }
]
function addNewUser(input) {
    return new Promise((resolve, reject) => {
        const user = persons.find((u) => {
            return u.id === input.id
        })
        if (!user) {
            persons.push(input)
            resolve({action: 'success', data: input})
        } else {
            reject({action: 'error', data: 'user id exist'})
        }
    })
}
let newUser = {
    id: 1113,
    firstName: "avi",
    lastName: "tur",
    age: 35
}
addNewUser(newUser).then((request) => {
    console.log(request)
}).catch((error) => {
    console.log(error)
}).finally(()=>{
    console.log(persons)
})
