import mysql from "mysql";
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "db_data",
});


export const dbConnect = () => {
    con.connect((err) => {
        if (err) {
            throw err;
            process.exit(1);
        }
        console.log("DB connected");
    });
}
export default con