const skills = [
    {id: 1, skill: "HTML", level: 4},
    {id: 2, skill: "CSS", level: 4},
    {id: 3, skill: "JavaScript", level: 3},
]

module.exports = {
    getAll, 
    getOne,
    create,
    deleteOne
}

function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}

function create(skill) {
    // add the id
    skill.id = Date.now() % 1000000
    //new skills need to have their level chosen -- ad this if I have time
    skills.push(skill)
}

function deleteOne(id) {
    id = parseInt(id)
    const idx= skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1)
}