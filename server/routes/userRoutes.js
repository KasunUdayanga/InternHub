import express from 'express';
import { applyForIntern, getUserData, getUserInternApplication, updateUserResume } from '../Controllers/userController.js';
import upload from '../config/multer.js';

const router =  express.Router();

router.get('/user',getUserData)
router.post('/apply',applyForIntern)
router.get('/applications',getUserInternApplication)
router.post('/update-resume',upload.single('resume'),updateUserResume)

export default router;