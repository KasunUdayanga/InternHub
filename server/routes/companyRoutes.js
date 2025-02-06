import express from 'express';
import { ChangeInternApplicationStatus, changeVisibility, getCompanyData, getCompanyInternApplicants, getCompanyPostedIntern, loginCompany, postIntern, registerCompany } from '../Controllers/companyController.js';
import upload from '../config/multer.js';

const router = express.Router();

router.post('/register',upload.single('image') ,registerCompany)

router.post('/login',loginCompany)
 
router.get('/company',getCompanyData)

router.post('/post-intern',postIntern)

router.get('/applicants',getCompanyInternApplicants)

router.get('/list-interns',getCompanyPostedIntern)

router.post('/change-status',ChangeInternApplicationStatus)

router.post('/change-visibility',changeVisibility)

export default router;
