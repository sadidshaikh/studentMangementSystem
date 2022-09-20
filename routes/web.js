import express from 'express';
import StudentController from '../controllers/studentController.js';
const router = express.Router();

router.route('/')
.get(StudentController.getAllDoc)
.post(StudentController.createDoc);

router.route('/edit/:id')
.get(StudentController.editDoc)
.post(StudentController.updateDocById)

router.post('/delete/:id', StudentController.deleteDocById);

export default router;