'use strict'

var express = require('express');
const { route } = require('../app');
var ProjectController = require('../controllers/project');

var router = express.Router();

//Middlewares

var multipart = require('connect-multiparty');

var multiparMiddleware = multipart({uploadDir: './uploads'});

//rutas
router.get('/home', ProjectController.home);
router.post('/test', ProjectController.test);
router.post('/save-project', ProjectController.saveProject);
router.get('/project/:id?', ProjectController.getProject);
router.get('/projects', ProjectController.getProjects);
router.put('/project/:id', ProjectController.updateProject);
router.delete('/project/:id', ProjectController.deleteProject);
router.post('/upload-image/:id', multiparMiddleware, ProjectController.uploadImage);


module.exports =  router;