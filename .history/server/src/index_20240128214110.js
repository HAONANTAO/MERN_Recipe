import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

//前后端json转化给
app.useCallback(express.json());
