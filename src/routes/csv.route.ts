import { Router } from 'express';
import { uploadCsv} from '../controllers/csv.controller';
import { checkUserOrigin } from '../_core/middlewares/check-origin.middleware';

const router = Router();

router.post('/upload/v1/csv', uploadCsv as any);

export default router;
