//panggil semua
const express = require('express');
const mongoose = require('mongoose');

// deklarasikan app
const app = express();
app.use(express.json());

//membuat koneksi dengan mongodb
mongoose.connect(
'mongodb://localhost:27017/bookstore', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
//cek koneksi
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// deklarasi route
const booksRouter = require('./routes/books');
app.use('/books', booksRouter);

// //deklarasi route
// const booksRouter = require('./routes/books');
// app.use('/books', booksRouter);

//deklarasi port
const PORT = process.env.PORT  || 3000;
app.listen(PORT, () => console.log('Server started on port ${PORT}'));
