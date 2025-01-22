import userRepository from "../repositories/users.repositories.js";

const createUserService = async (newUser) => {
    const user = await userRepository.createUserRepository(newUser);
    return user;
}

export default {
    createUserService
}
