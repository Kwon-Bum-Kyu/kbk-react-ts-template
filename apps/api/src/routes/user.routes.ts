import { Router } from 'express';
import { UserController } from '../controllers/user.controller';

const router = Router();
const userController = new UserController();

router.get('/users', (req, res, next) => userController.getUsers(req, res, next));
router.get('/users/:id', (req, res, next) => userController.getUserById(req, res, next));
router.post('/users', (req, res, next) => userController.createUser(req, res, next));
router.put('/users/:id', (req, res, next) => userController.updateUser(req, res, next));
router.delete('/users/:id', (req, res, next) => userController.deleteUser(req, res, next));

export default router;
