const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());


const port = 3000 || process.env.PORT;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});