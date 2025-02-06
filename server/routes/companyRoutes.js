import express from 'express';
import { ChangeInternApplicationStatus, changeVisibility, getCompanyData, getCompanyInternApplicants, getCompanyPostedIntern, loginCompany, postIntern, registerCompany } from '../Controllers/companyController.js';
import upload from '../config/multer.js';
import { protectCompany } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register',upload.single('image') ,registerCompany)

router.post('/login',loginCompany)
 
router.get('/company',protectCompany, getCompanyData)

router.post('/post-intern',protectCompany,postIntern)

router.get('/applicants',protectCompany,getCompanyInternApplicants)

router.get('/list-interns',protectCompany,getCompanyPostedIntern)

router.post('/change-status',protectCompany,ChangeInternApplicationStatus)

router.post('/change-visibility',protectCompany,changeVisibility)

export default router;
