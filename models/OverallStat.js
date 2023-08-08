import mongoose from 'mongoose'


const overallStatSchema = new mongoose.Schema({
    totalCustomer : Number,
    yearlySalesTotal : Number,
    yearlyTotalSoldUnits : Number,
    year : Number,
    monthlyData : [
        {
            month : String,
            totalSales : Number,
            totalUnits : Number
        }
    ],
    dailyData: [
        {
            date : String,
            totalSales : Number,
            totalUnits : Number,
    
        }
    ],
    salesByCategory : {
        type : Map, // you can create object with Map in Mongoose
        of : Number,
    }
    
},{timestamps : true})
const OverAllStat = mongoose.model('OverAllStat',overallStatSchema)

export default OverAllStat