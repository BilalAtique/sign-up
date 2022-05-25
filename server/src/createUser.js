import con from "./connect.js";
import bcrypt from "bcrypt";

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(password, salt);
};

const createUser = async (req, res) => {
    const user = req.body;
    const { username, email, password } = req.body;
    const hashedPassword = await hashPassword(password);
    const sql = `INSERT INTO user (username, email, password) VALUES ('${username}', '${email}', '${hashedPassword}')`;
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
    res.send(user);
};

export default createUser;
