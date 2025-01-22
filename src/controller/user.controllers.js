import userService from '../services/user.services.js';

const createUserController = async (req, res) => {
    const newUser = req.body;

    try {
        const user = userService.createUserService(newUser);
        res.status(201).send({user});
    } catch (err) {
        return res.status(400).send(err.message);
    }
}

export default {
    createUserController
}
 