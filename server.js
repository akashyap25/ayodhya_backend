const express = require('express');
const connectDB = require("./db/connect");
const dotenv = require("dotenv");
const PrasadModel = require ('./db/Model');
const cors = require('cors');
const port =  process.env.PORT || 5000  ;
const path = require('path'); 
const BASE_URL = process.env.BASE_URL;





const app = express();
app.use(express.json());
app.use(cors());
connectDB();
dotenv.config();

// // Serve static files from the 'client/build' folder
// app.use(express.static(path.join(__dirname, '..', 'client', 'build')));


// Route for prasad Form
app.post('/prasadForm', async (req, res) => {
    try {
        const formdata = req.body;
        const prasadData = new PrasadModel(formdata);
        console.log(formdata);
        console.log(prasadData);
        await(prasadData.save());
        res.status(200).json({ message: "Form data saved successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// // For all other routes, serve the React app
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
//   });



 app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});