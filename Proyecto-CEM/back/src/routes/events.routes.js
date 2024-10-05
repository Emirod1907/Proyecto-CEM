import { Router} from "express";
import {authRequired} from "../middlewares/validateToken.js"
import {
    getEvents,
    getEvent,
    createEvent,
    updateEvents,
    deleteEvents
} from "../controllers/events.controller.js"
import {validateSchema} from "../middlewares/validator.middleware.js"
import {createEventschema} from "../schemas/event.schema.js"

const router = Router();

router.get('/events', authRequired, getEvents)

router.get('/events/:id', authRequired, getEvent)

router.post('/events', authRequired,
    validateSchema(createEventschema),
    createEvent
)

router.delete('/events/:id', authRequired,deleteEvents)

router.put('/events/:id', authRequired, updateEvents)

export default router;