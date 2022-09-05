import express from 'express';
import {Verify} from '../middlewares/Users.js'
const router = express.Router();

import {getAllCustomers,
        searchCustomer,
        getCustometData,
        updateCustomer} from '../controllers/Customers.js';

router.get('/customers',Verify, getAllCustomers);
router.get('/search',Verify, searchCustomer);
router.get('/customer/:id',Verify, getCustometData);
router.put('/update/:id',Verify, updateCustomer);

export default router;
