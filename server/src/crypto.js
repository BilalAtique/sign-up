import bcrypt from "bcrypt"
const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(password, salt);
}
(async() => console.log(await hashPassword("123234")))()