import joi from "joi";

const userSchema = joi.object({
    username: joi.string().min(3).max(30).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
})

const validateUser = async (req, res, next) => {
    try {
        await userSchema.validateAsync(req.body);
        console.log("Joi validation passed");
        next();
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

export default validateUser;