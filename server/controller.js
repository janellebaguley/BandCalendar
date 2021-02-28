module.exports = {
    getCalEvents:  async (req, res) => {
        const db = req.app.get('db')

        await db.get_events()
        .then(event => res.status(200).send(event))
        .catch(err => res.status(500).send(err))
    },
    addEvents: async (req, res) => {
        const db = req.app.get('db')
        const {title, location, start, end} = req.body
        const {user_id} = req.session.user

        await db.add_events(user_id, title, location, start, end)
        .then(() => res.sendstatus(200))
        .catch(err => res.status(500).send(err))
    },
    searchEvent: (req, res)=> {
        const db = req.app.get('db')
        const {title, location} = req.body

        db.search_events(title, location, group)
        .then(() => res.sendstatus(200))
        .catch(err => res.status(500).send(err))
    },
    deleteEvent: (req, res) => {
        const {event_id, user_Id} = req.params
        const db = req.app.get('db')

        db.delete_event(event_id, user_id)
        .then(() => res.sendstatus(200))
        .catch(err => res.status(500).send(err))
    },
    getSessionUser: (req, res) => {
        const {user} =req.session
        if(user){
            res.send(user)
        } else {
            res.send('')
        }
    }
}