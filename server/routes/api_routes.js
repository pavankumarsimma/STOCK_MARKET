import express from 'express';
import { getAllSymbols, getTimeseriesdata } from '../controls/api_controls';

const api_router = express.Router();

api_router.get("/symbols", getAllSymbols);
api_router.get("/timeseries/:symbol", getTimeseriesdata);

export default api_router;
