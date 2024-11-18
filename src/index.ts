import express from 'express';
import connectDB from './config/db';
import Userrouter from './routes/user.routes';
import Contentrouter from './routes/content.routes';
import sharingPointrouter from './routes/sharing.routes';
import 'dotenv/config';
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

connectDB();

app.use('/user',Userrouter);
app.use('/content',Contentrouter);
app.use('/sharing',sharingPointrouter);

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});

