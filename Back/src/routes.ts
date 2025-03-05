import Router from 'koa-router';
import { homeController } from '../controllers/homeController';

const router = new Router();

// Routes publiques
router.get('/', homeController.getHome);
router.post('/login', homeController.login);

// Routes protégées
router.get('/protected', homeController.getProtected);

export default router;