import mongoose from 'mongoose'



const productStatSchema = new mongoose.Schema({

productId : String,
yearlySalesTotal : Number,
yearlySalesSoldUnits : Number,
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
]

},{timestamps : true})


const ProductStat = mongoose.model('ProductStat',productStatSchema)

export default ProductStat