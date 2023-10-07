function respon(res){
    res.setHeader("Content-Type", "html");
    res.writeHead(200);
    res.end("<h1>Halo</h1>");
}

function dataUser(res,user) {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify(user));
}

function dataStatus(res,status) {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 404;
    res.end(JSON.stringify(status));
}

module.exports={respon,dataUser,dataStatus};