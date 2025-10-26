const mongoose=require("mongoose")
const visitorSchema=mongoose.Schema(
    {
        "visitorName":String,
        "purpose":String,
        "whomToMeet":String,
        "date":String,
        "checkInTime":String,
        "checkOutTime":String
    }
)
const visitorModel=mongoose.model("visitors",visitorSchema)
module.exports=visitorModel