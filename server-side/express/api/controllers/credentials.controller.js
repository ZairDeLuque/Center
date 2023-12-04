const { Connection } = require('../../utility/mysql2_utility/modelManager')

async function login(req, res) {
    let cn;

    try{
        cn = await Connection();

        const query = `SELECT * FROM personal WHERE idpersonal = ${req.body.id}`;
        const [result] = await cn.execute(query);

        if(result.length > 0) {
            res.status(200).json({
                status: 200,
                message: 'Login correcto',
                inside: true
            });
        }
        else {
            res.status(404).json({
                status: 404,
                message: 'Usuario no encontrado',
                inside: false
            });
        }
    }
    catch(error) {
        console.log('[ERROR] Login - Error en el servidor: ', error);

        res.status(500).json({
            status: 500,
            message: 'Error en el servidor',
            inside: false
        });
    }
    finally {
        if(cn) cn.close();
    }
}

module.exports = {
    login: login
}