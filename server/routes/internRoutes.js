import express from 'express';
import { getIntern, getInternById } from '../Controllers/internController.js';


const router = express.Router();

router.get('/',getIntern)
router.get('/:id',getInternById)

export default router;