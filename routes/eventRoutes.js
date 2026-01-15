import express from 'express';
import {createEvent, getEvents, updateEvent, deleteEvent} from '../controllers/eventController.js';

const router = express.Router();

router.post('/', createEvent);
router.get('/:userId', getEvents);
//router.get('/getAllEvents',getAllEvents)
//router.get('/getAllEvents/:userId',getAllEvents)
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);

export default router;