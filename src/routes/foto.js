import { Router } from 'express';
import fotoController from '../Controllers/FotoController';

const router = new Router();

router.post('/', fotoController.store);

export default router;
