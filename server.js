import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import clientRoutes from './routes/client.js';
import generalRoutes from './routes/general.js';
import managementRoutes from './routes/management.js';
import salesRoutes from './routes/sales.js';
import User from './models/User.js';
import {dataUser,dataProduct,dataProductStat,dataTransaction} from './data/index.js'
import ProductStat from './models/ProductStat.js';
import Product from './models/Product.js';
import Transaction from './models/Transaction.js';
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy : "cross-origin"}))
app.use(morgan('common'));
app.use(cors());

// Routes
app.use('/client', clientRoutes);
app.use('/general', generalRoutes);
app.use('/management', managementRoutes);
app.use('/sales', salesRoutes);

// Mongoose setup
const port = process.env.PORT || 4000;
const mongoURL = process.env.MONGO_URL
mongoose
  .connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () => console.log(`Server is running on ${port}`));
    //(users inserted)
    // return User.insertMany(dataUser); 
    //(Products inserted)
    //return Product.insertMany(dataProduct);
    //(Product-Stats inserted)
    //return ProductStat.insertMany(dataProductStat)
    // (Transactions inserted)
    // return Transaction.insertMany(dataTransaction)
   
  })
  .catch((err) => console.error(`Error while connecting to MongoDB: ${err}`));
