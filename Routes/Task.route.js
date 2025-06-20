const express = require('express');
const { createTask, deleteTask, getAllTask, showTask, updateTask }= require('../Controllers/Task.controller.js')

const Taskrouter = require('express').Router();

Taskrouter.post('/create-task', createTask)
Taskrouter.get('/get-all-task', getAllTask)
Taskrouter.get('/layout/show-task/:taskid', showTask)
Taskrouter.put('/update-task/:taskid', updateTask)
Taskrouter.delete('/delete-task/:taskid', deleteTask)

module.exports = Taskrouter;