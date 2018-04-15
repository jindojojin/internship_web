var database = require('./database');

var database_query = {
    getUser: async function (username) {
        try {
            var con = new database().create;
            con.connect();
            let myquery = "SELECT * FROM user WHERE username = ?";
            let ret = await new Promise((resolve, reject) => {
                con.query(myquery, [username], (err, result, fields) => {
                    if (err) reject(new Error("khong the truy van database"));
                    resolve(result);
                })
            });
            con.end();
            return Promise.resolve(ret);
        } catch (e) {
            return Promise.reject(e);
        }

    },

    getUserInfor: function (userID, type) {
        var con = new database().connect;
        if (type != "student" && type != "admin" && type != "lecturer" && type != "partner") {
            console.log("khong nhan dang duoc kieu user");
            return null;
        }
        con.connect(function (err) {
            if (err) throw err;
            con.query("SELECT * FROM " + type + " WHERE userID=" + userID, function (err, result, fields) {
                if (err) throw err;
                return result;
                //console.log(result);
            });
        });
    },
};

database_query.getUser("19021031").then((res)=> console.log(res))
.catch((reject)=> console.log("that bai"));

