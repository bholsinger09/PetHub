import express from 'express'
import UserService from '../services/UserService';
import { Authorize } from '../middleware/authorize'

let _us = new UserService()
let _repo = _us.repository

//PUBLIC
export default class AuthController {
    constructor() {
        this.router = express.Router()
            .post('/register', this.register)
            .post('/login', this.login)
            .put('/:id', this.updateProfile)
            .use(Authorize.authenticated)
            .get('/authenticate', this.authenticate)
            .delete('/logout', this.logout)
            .delete('/searches/:id', this.removeSearchById)
            .delete('/favorites/:id', this.removeFavoriteById)
            .use('*', this.defaultRoute)
    }

    defaultRoute(req, res, next) {
        next({ status: 404, message: 'No Such Route' })
    }
    async register(req, res, next) {
        //VALIDATE PASSWORD LENGTH
        if (req.body.password.length < 5) {
            return res.status(400).send({
                error: 'Password must be at least 6 characters'
            })
        }
        try {
            //CHANGE THE PASSWORD TO A HASHED PASSWORD
            req.body.hash = _us.generateHash(req.body.password)
            //CREATE THE USER
            let user = await _repo.create(req.body)
            //REMOVE THE PASSWORD BEFORE RETURNING
            console.log("created")
            delete user._doc.hash
            //SET THE SESSION UID (SHORT FOR USERID)
            req.session.uid = user._id
            res.status(201).send(user)
        }
        catch (err) {
            res.status(400).send(err)
        }
    }

    async login(req, res, next) {
        try {

            let user = await _repo.findOne({ email: req.body.email })
            if (!user) {
                return res.status(400).send("Invalid Username ")
            }
            //CHECK THE PASSWORD
            let valid = await user.validatePassword(req.body.password)
            console.log(req.body.password)
            if (!valid) {
                return res.status(400).send("Invalid Password")
            }
            //ALWAYS REMOVE THE PASSWORD FROM THE USER OBJECT
            delete user._doc.hash
            req.session.uid = user._id
            res.send(user)
        }
        catch (err) {
            res.status(400).send("Invalid Username Or Password")
        }
    }

    async updateProfile(req, res, next) {
        try {
            let userToBeFound = await _repo.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            if (userToBeFound) {
                return res.send(userToBeFound)
            }
            throw new Error("Not a valid ID")
        } catch (error) {
            res.status(400).send(error)
        }

    }

    async authenticate(req, res, next) {
        try {
            let user = await _repo.findOne({ _id: req.session.uid })
            if (!user) {
                return res.status(401).send({
                    error: 'Please login to continue'
                })
            }
            delete user._doc.hash
            res.send(user)
        }
        catch (err) {
            console.error(err)
            res.status(500).send(err)
        }
    }

    async logout(req, res, next) {
        try {
            req.session.destroy(err => {
                if (err) {
                    return res.send(err)
                }
                return res.send({
                    message: 'Logout Successful'
                })
            })
        } catch (error) { next(error) }
    }

    async removeSearchById(req, res, next) {
        try {
            let user = await _repo.findById(req.session.uid)
            if (!user) throw new Error('Not logged in.')
            let index = user.searches.findIndex(s => s._id.toString() == req.params.id)
            user.searches.splice(index, 1)
            await user.update(user)
            res.send(user)
        } catch (error) { next(error) }
    }

    async removeFavoriteById(req, res, next) {
        try {
            let user = await _repo.findById(req.session.uid)
            if (!user) throw new Error('Not logged in.')
            let index = user.favorites.findIndex(s => s._id.toString() == req.params.id)
            user.favorites.splice(index, 1)
            await user.update(user)
            res.send(user)
        } catch (error) { next(error) }
    }


}


