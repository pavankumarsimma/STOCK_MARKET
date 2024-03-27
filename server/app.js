import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import api_router from './routes/api_routes';

const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();

app.get("/", (req, res, next)=>{
	res.status(200).send("Hello Wrold!! Checking my error :)");
});

// routes
app.use("/api", api_router);

// running sever
const port = process.env.PORT || 5001;
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
