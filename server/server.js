const express = require('express')
const bodyparser = require('body-parser')
const mysql = require('mysql2')
const path = require('path')

// Create an express app
const app = express();

//Middlware
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, 'public')));

// MySQL DB Connection
const db = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'@Nubhav438',
    database:'ams'
});

//Connect to MYSQL
db.connect(err=>{
    if(err)
    {
        console.error('Error connecting to MYSQL', err);
        return;
    }
    console.log('Connected to MySQL');
});

//Route to test server
app.get('/', (req, res) =>{
    // res.send('Server is running!');
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//Handle Login Requests
app.post('/staff-login', (req, res) =>{
    console.log(req.body);
    const {username, password, role} = req.body;

    if (!username || !password || !role) {
        return res.status(400).json({
            success: false,
            message: "Username, password, and role are required."});
    }

    const query = 'SELECT * FROM staffusers WHERE username = ? AND password = ?';
    db.query(query, [username, password], (err, results) => {
        if(err){
            console.error('Error querying the database: ', err);
            return res.status(500).json({
                success:false,
                message:"Database error occurred."
            });
        }
        if (results.length > 0) {
            // Login Successful
            res.status(200).json({
                success: true,
                role: role   
            });
        } else {
            // Login Failed
            return res.status(401).json({
                success: false,
                message: "Invalid username, password, or role."});
        }
    });
});

// API to fetch all users
app.get('/users', (req, res) => {
    const query = 'SELECT * FROM staffusers';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.status(500).send('Error fetching users');
            return;
        }
        res.json(results);
    });
});

//Start the server
const PORT = 8000;
app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`);
});