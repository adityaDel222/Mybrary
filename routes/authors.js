const express = require('express');
const router = express.Router();
const Author = require('../models/author');

// All Authors Route
router.get('/', (req, res) => {
    res.render('authors/index');
});

// New Author Route
router.get('/new', (req, res) => {
    res.render('authors/new', { author: new Author() });
});

// Create Author Route
router.post('/', (req, res) => {
    const author = new Author({
        name: req.body.name
    });
    author.save((err, newAuthor) => {
        if(err) {
            let locals = { author: author, errorMessage: 'Something went wrong '};
            // res.render('authors/new', {
            //     author: author,
            //     errorMessage: 'Error Creating Author'
            // });
            res.render('authors/new', locals);
        } else {
            // res.redirect(`authors/${ newAuthor.id }`);
            res.redirect('authors');
        }
    });
});

module.exports = router;