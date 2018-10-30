import { Router } from 'express';
import helloworld from './helloworld';

const router: Router = Router();

router.use('/', helloworld);

export default router;
