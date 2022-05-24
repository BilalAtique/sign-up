import con from "./connect.js";

const createUser = (req, res) => {
    const user = req.body;
    const {username, email, password} = req.body;
    const sql = `INSERT INTO user (username, email, password) VALUES ('${username}', '${email}', '${password}')`;
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
    res.send(user);
};

export default createUser;
