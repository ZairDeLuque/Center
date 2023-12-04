function hostAlready(req, res){
    console.log(`[LOG] Request: (${req.ip}) to '${req.url}': [${req.method}].`);
    res.status(200).send('Hospital status active. <br><br>API Version: 0.0.1 | Aurora Services: 145.10.02.90-strawberry');
}

function errorDir(req, res){
    console.log(`[LOG] Request: (${req.ip}) to '${req.url}': [Not found].`);
    res.status(404).send('HS-Server: Not Found.');
}

module.exports = {
    main: hostAlready,
    notfound: errorDir
}