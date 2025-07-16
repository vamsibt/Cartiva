import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRoute from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

//---------App Configuration

const app = express();

const port = process.env.PORT || 4000;
connectDB()
connectCloudinary()

//--------middlewares

app.use(express.json())
app.use(cors())

//--------API endpoints
app.use('/api/user', userRouter)
app.use('/api/product', productRoute)
app.use('/api/cart' , cartRouter)
app.use('/api/order', orderRouter)

app.get('/' , (req, res) => {
    res.send("API WORKING")
})

app.listen(port, () => {
    console.log(`Server Started on PORT: `+ port)
})