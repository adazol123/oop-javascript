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
        const data = new memberSchema(req.body)
        await data.save()
        console.log('✅ success: OK')
        res.json({sucess: 'OK', created: req.body })
        
    } catch (error) {
        switch(error.code){
            case 11000 :
                return res.json({ error: `Member already exists on the database > username: ${req.body.username}`, description: error.message })
            default:
                return res.json({ error: error.message, code: error.code })
        }
        
    }
}

//REPLACE SPECIFIC DOCUMENT ON THE COLLECTION'S DATABASE
const updateMember = async (req,res) => {
    try {
        await memberSchema.replaceOne({username: req.body.username}, req.body
        // overwrite option below will replace the whole document to the collection
        )

        res.json({sucess: 'OK', replaced: req.body})
        
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
                deleted : 'All Documents'
            })
        }
        else {
            res.json({
                error: err.message
            })
        }
    })
}

//UPDATE DOCUMENTS ON THE COLLECTION's DATABASE
const patchMember = async function(req,res) {
    try {
        await memberSchema.updateOne({username: req.body.username},{
            $set: req.body
        }
        )

        res.json({success: 'OK', updated: req.body})
        
    } catch (error) {
        res.json({
            error: error.message
        })
    }
}

//RETRIEVE SPECIFIC USER FROM THE MEMBER COLLECTION's DATABASE
const getUser = function(req,res) {
    memberSchema.findOne({name: req.params.name}, function(err, result){
        if(err) return res.json({error: err.message})
        else {
            if(result !== null) {
                return res.json({success: 'OK', member: result})
            }   else {
                return res.json({ warning: "Unfortunately, the member you are looking at is not yet exist from the database"})
            }
        }
    })
}

//DELETE SPECIFIC USER UNDER MEMBER DOCUMENT
const deleteUser = async function(req,res ) {
    try {
        await memberSchema.deleteOne({name : req.params.name})
        res.json({ success: 'OK', deleted: req.params.name})
    } catch (error) {
        res.json({ error: error.message})
    }
}


module.exports = {
    getMember, createMember, updateMember, patchMember, deleteMember, getUser, deleteUser
}