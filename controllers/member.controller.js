const memberSchema = require('../models/member.schema')

//FETCH ALL DATA FROM COLLECTION'S DATABASE
const getMember = async (req,res) => {

    try {
        const data = await memberSchema.find({})
        console.log(data)
        res.json({ success: "OK", data: data })
        
    } catch (error) {   
        res.json({ error: error.message })
        
    }
}

//CREATE NEW DOCUMENT TO THE COLLECTION'S DATABASE
const createMember = async (req,res) => {
    try {
        const data = new memberSchema({
            name: req.body.name,
            username: req.body.username,
            metamask_address: req.body.metamask_address
    
        })
        await data.save()
        console.log('✅ success: OK')
        res.json({
            name : req.body.name,
            username : req.body.username,
            metamask_address: req.body.metamask_address
        })
        
    } catch (error) {
        switch(error.code){
            case 11000 :
                return res.json({ error: `Member already exists on the database > username: ${req.body.username}`, description: error.message })
            default:
                return res.json({ error: error.message, code: error.code })
        }
        
    }
}

//UPDATE SPECIFIC DOCUMENT ON THE COLLECTION'S DATABASE
const updateMember = async (req,res) => {
    try {
        await memberSchema.updateOne({username: req.body.username},{
            $set: {
                name: req.body.name,
                metamask_address: req.body.mm_address
            }
        })

        res.json({
            updated_name : req.body.name,
            Updated_metamask_address : req.body.mm_address
        })
        
    } catch (error) {
        res.json({
            error: error.message
        })
    }

}

//REMOVE ALL THE DOCUMENT FROM THE COLLECTION OF THE DATABASE OR DROP THE COLLECTION ON THE DATABASE
const deleteMember = (req,res) => {

    memberSchema.deleteMany(function(err){
        if(!err){
            res.json({
                success : 'OK',
                deleted : 'sucess'
            })
        }
        else {
            res.json({
                error: err.message
            })
        }
    })
}


module.exports = {
    getMember, createMember, updateMember, deleteMember
}