const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/test')
let Book = mongoose.model('Book', {
    name: String,
    published: Boolean,
    created_at: Date,
    updated_at: { type: Date, default: Date.now }
})
let practicalBook = new Book({
    name: 'work and role',
    author: 'Manish Sharma',
    link: 'https://github.com/maniSHarma7575',
    created_at: Date.now()
})
console.log('Is new ?', practicalBook.isNew);
practicalBook.save((error, result) => {
    if (error) {
        console.log(error);
    }
    console.log(result);
    console.log('Is new ?', practicalBook.isNew);
    Book.findOne({ _id: result._id }, 'name', (error, Bookresult) => {
        if (error) {
            console.log(error);
        }
        console.log(Bookresult.toJSON())
        console.log(Bookresult.id)
        Bookresult.published = true;
        Bookresult.remove();
    })

    return process.exit(0);
})