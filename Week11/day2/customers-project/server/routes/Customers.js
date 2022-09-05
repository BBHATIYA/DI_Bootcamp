import express from 'express';
const router = express.Router();

import {getAllCustomers,searchCustomer,getCustometData} from '../controllers/Customers.js';

router.get('/customers', getAllCustomers);
router.get('/search', searchCustomer);
router.get('/customer/:id', getCustometData);

export default router;
