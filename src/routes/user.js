import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';
import userController from '../Controllers/UserController';

const router = new Router();

router.get('/', userController.index);
router.get('/:id', userController.show);

router.post('/', userController.store);
router.put('/:id', loginRequired, userController.update);
router.delete('/:id', loginRequired, userController.delete);

export default router;
