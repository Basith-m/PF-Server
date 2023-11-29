const express = require('express')
const router = new express.Router()
const userController = require('../Controllers/userController')
const projectController = require('../Controllers/projectController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const multerConfig = require('../Middlewares/multerMiddleware')

// register API

router.post('/user/register',userController.register)

// login API

router.post('/user/login',userController.login)
module.exports = router

//add-Project
router.post('/project/add',jwtMiddleware,multerConfig.single('projectImage'),projectController.addProjects) 

// getUserProjects
router.get('/user/all-projects',jwtMiddleware,projectController.allUserProjects)

// getAllProjects 
router.get('/projects/all',jwtMiddleware,projectController.getAllProjects)

// getHomeProjects
router.get('/projects/home-projects',projectController.getHomeProjects)


// editproject
router.put('/projects/edit/:id',jwtMiddleware,multerConfig.single('projectImage'),projectController.editProjectController)

// deleteProject

router.delete('/projects/remove/:id',jwtMiddleware,projectController.deleteProjectController)

// editUser

router.put('/user/edit',jwtMiddleware,multerConfig.single('profileImage'),userController.editUser)

// export router
module.exports = router
