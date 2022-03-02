const express = require('express')
const path = require('path');

const { body } = require('express-validator');

const profilePictureMiddlewares = [
    body('image').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.jpeg', '.png', 'gif'];

        if(file) {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extensiones de imagen permitidas son ${acceptedExtensions.join(', ')}`)
            }
        }
        return true
    })
];

module.exports = profilePictureMiddlewares;