import express from 'express';
import { signUpUser, loginUser } from '../controllers/user-controller.js';

const router = express.Router();

// check route to check if the backend is running
router.get('/checkup', (req, res) => {
    console.log('GET /checkup endpoint was hit');
    res.status(200).send('Backend is running correctly');
});

// POST route for user signup
router.post('/signup', signUpUser);

router.post('/login', loginUser);




export default router;
