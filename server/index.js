const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const userModel = require('./models/credentials');

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/medicore-cred");

const userDetails = {
    email: null
}

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const normalizedEmail = (email || '').trim().toLowerCase();

    userModel.findOne({ email: normalizedEmail })
        .then(async (user) => {
            if (user) {
                const isMatch = await bcrypt.compare(password, user.password);
                if (isMatch) {
                    userDetails.email = user.email;
                    res.json("Success")
                } else {
                    res.json("the password is incorrect")
                }
            } else {
                res.json("No record Existed")
            }
        })
})

app.post('/register', (req, res) => {
    console.log(req.body);
    const newUser = {
        ...req.body,
        email: (req.body.email || '').trim().toLowerCase()
    };

    if (newUser.password.length < 6) {
        return res.json("Passwords must be at least 6 characters.")
    } else {
        if (newUser.password !== newUser.passwordAgain) {
            return res.json("Passwords do not match.")
        } else {
            userModel.findOne({ email: newUser.email })
                .then(existing => {
                    if (existing) {
                        return res.json("Email already registered.")
                    }
                    const { passwordAgain, ...userToCreate } = newUser;
                    bcrypt.hash(userToCreate.password, 10)
                        .then((hashed) => {
                            userToCreate.password = hashed;
                            return userModel.create(userToCreate);
                        })
                        .then(user => res.json(user))
                        .catch(err => {
                            if (err && err.code === 11000) {
                                return res.json("Email already registered.")
                            }
                            res.json(err)
                        })
                })
        }
    }
})

app.get('/profile', (req, res) => {
    const { email } = userDetails;
    console.log("Email: " + email);
    userModel.findOne({ email: email })
        .then(user => {
            if (user) {
                res.json(user);
            } else {
                res.json("User not found");
            }
        })
        .catch(err => console.log(err))
})

app.listen(3009, () => {
    console.log("Server is running");
})
