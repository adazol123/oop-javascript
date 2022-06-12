const {Schema, model} = require('mongoose')


const member = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        required: true,
        auto: true
    },
    name: String,
    username: {
        type: String,
        required: true,
        unique: true
    },
    metamask_address: String
})


module.exports = model('member', member)