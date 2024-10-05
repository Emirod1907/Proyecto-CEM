import event from "../models/event.model.js"

export const getEvents = async (req, res) => {
    try {
        const events = await event.find({
            user: req.user.id
        }).populate("user")
        res.json(events)
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
;}

export const createEvent = async (req, res) => {
try {
    const { title, description, date } = req.body
    
    const newEvent = new Event ({
        title,
        description,
        date,
        user: req.user.id
    }) 
    const savedEvent = await newEvent.save()
    res.json(savedEvent);
    } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
}
}

export const getEvent = async (req, res) => {
    try {
        const event = await event.findById(req.params.id).populate("user")
        if (!event) return res.status(404).json({Message:"Event not found"})
        res.json(event);
    } catch (error) {
        return res.status(404).json({message: "Event not found"})
    }
};

export const deleteEvents = async (req, res) => {
    try {
        const event = await event.findByIdAndDelete(req.params.id)
        if (!event) return res.status(404).json({Message: `Event not found`})
        return res.sendstatus(204)
    } catch (error) {
        return res.status(404).json({message: "Event not found"})
    }
}

export const updateEvents = async (req, res) => {
    try {

        const event = await event.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        if (!event) return res.status(404).json({Message: `Event not found`})
        res.json(event)
    } catch (error) {
        return res.status(404).json({message: "Event not found"})       
    }
}

