import express from 'express';

import * as tasksCtrl from '../controllers/tasks';

const router = express.Router();

router.options("/task", tasksCtrl.createTask);
router.post("/task", tasksCtrl.createTask);
router.get("/tasks", tasksCtrl.getAllTasks);
router.get("/task/:id", tasksCtrl.getTask);
router.options("/task/:id", tasksCtrl.toggleTask);
router.put("/task/:id", tasksCtrl.toggleTask);
router.options("/tasks", tasksCtrl.cleanAllTasks);
router.delete("/tasks", tasksCtrl.cleanAllTasks);

export default router;
