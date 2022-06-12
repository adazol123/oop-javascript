const getMember = (req,res) => {
    console.log(req.body)
    res.json({ success: "OK", member: 'True'})
}

const createMember = (req,res) => {
    res.json({
        name : req.body.name,
        id : req.body._id
    })
}

const updateMember = (req,res) => {
    res.json({
        name : req.body.name,
        id : req.body._id
    })
}
const deleteMember = (req,res) => {
    res.json({
        name : req.body.name,
        id : req.body._id
    })
}


module.exports = {
    getMember, createMember, updateMember, deleteMember
}