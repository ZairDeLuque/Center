const { Connection } = require('../../utility/mysql2_utility/modelManager')

async function pacientes(req, res) {
    let cn;

    try{
        cn = await Connection();

        const query = `SELECT * FROM pacientes`;
        const [result] = await cn.execute(query);

        if(result.length > 0) {
            res.status(200).json({
                status: 200,
                data: result,
            });
        }
    }
    catch(error) {
        console.log('[ERROR] Pacientes - Error en el servidor: ', error);

        res.status(500).json({
            status: 500,
            message: 'Error en el servidor',
        });
    }
    finally {
        if(cn) cn.close();
    }
}

async function procedimientos(req, res) {
    let cn;

    try{
        cn = await Connection();

        const query = `SELECT * FROM procedimientos`;
        const [result] = await cn.execute(query);

        if(result.length > 0) {
            res.status(200).json({
                status: 200,
                data: result,
            });
        }
    }
    catch(error) {
        console.log('[ERROR] Procedimientos - Error en el servidor: ', error);

        res.status(500).json({
            status: 500,
            message: 'Error en el servidor',
        });
    }
    finally {
        if(cn) cn.close();
    }
}

async function equipo(req, res) {
    let cn;

    try{
        cn = await Connection();

        const query = `SELECT * FROM equipo ORDER BY ubicacion_equipo ASC`;
        const [result] = await cn.execute(query);

        if(result.length > 0) {
            res.status(200).json({
                status: 200,
                data: result,
            });
        }
    }
    catch(error) {
        console.log('[ERROR] Equipo - Error en el servidor: ', error);

        res.status(500).json({
            status: 500,
            message: 'Error en el servidor',
        });
    }
    finally {
        if(cn) cn.close();
    }
}

async function editarPacientes(req, res){
    let cn;

    try{
        const body = req.body;

        cn = await Connection();

        const sql = 'UPDATE pacientes SET nombre_pacientes = ?, apellidos_paciente = ?, edad_paciente = ? WHERE idpacientes = ?'
        const values = [body.nombre, body.apellido, body.edad, body.id]

        const [result] = await cn.execute(sql, values);

        if(result.affectedRows > 0) {
            res.status(200).json({
                status: 200,
                message: 'Paciente agregado correctamente',
            });
        }
        else{
            res.status(500).json({
                status: 500,
                message: 'Error en el servidor',
            });
        
        }
    }
    catch (e){
        console.log('[ERROR] Pacientes - Error en el servidor: ', e);

        res.status(500).json({
            status: 500,
            message: 'Error en el servidor',
        });
    }
    finally{
        if(cn) cn.close();
    }
}

async function eliminarPaciente(req, res){
    let cn;

    try{
        const body = req.body;

        cn = await Connection();

        const sql = 'DELETE FROM pacientes WHERE idpacientes = ?'
        const values = [body.id, body.id]

        const [result] = await cn.execute(sql, values);

        if(result.affectedRows > 0) {
            res.status(200).json({
                status: 200,
                message: 'Paciente eliminado correctamente',
            });
        }
        else{
            res.status(500).json({
                status: 500,
                message: 'Error en el servidor',
            });
        
        }
    }
    catch (e){
        console.log('[ERROR] Pacientes - Error en el servidor: ', e);

        res.status(500).json({
            status: 500,
            message: 'Error en el servidor',
        });
    }
    finally{
        if(cn) cn.close();
    }

}

async function personal(req, res){
    let cn;

    try{
        cn = await Connection();

        const query = `SELECT * FROM medicos`;
        const [result] = await cn.execute(query);

        if(result.length > 0) {
            res.status(200).json({
                status: 200,
                data: result,
            });
        }
    }
    catch(error) {
        console.log('[ERROR] Personal - Error en el servidor: ', error);

        res.status(500).json({
            status: 500,
            message: 'Error en el servidor',
        });
    }
    finally {
        if(cn) cn.close();
    }
}

async function donativos(req, res){
    let cn;

    try{
        cn = await Connection();

        const query = `SELECT * FROM donaciones ORDER BY fecha_donacion DESC`;
        const [result] = await cn.execute(query);

        if(result.length > 0) {
            res.status(200).json({
                status: 200,
                data: result,
            });
        }
    }
    catch(error) {
        console.log('[ERROR] Donativos - Error en el servidor: ', error);

        res.status(500).json({
            status: 500,
            message: 'Error en el servidor',
        });
    }
    finally {
        if(cn) cn.close();
    }

}

async function presupuestos(req, res){
    let cn;

    try{
        cn = await Connection();

        const query = `SELECT * FROM presupuestos ORDER BY categoria DESC`;
        const [result] = await cn.execute(query);

        if(result.length > 0) {
            res.status(200).json({
                status: 200,
                data: result,
            });
        }
    }
    catch(error) {
        console.log('[ERROR] Presupuestos - Error en el servidor: ', error);

        res.status(500).json({
            status: 500,
            message: 'Error en el servidor',
        });
    }
    finally {
        if(cn) cn.close();
    }

}

module.exports = {
    pacientes: pacientes,
    procedimientos: procedimientos,
    equipo: equipo,
    editarPacientes: editarPacientes,
    eliminarPaciente: eliminarPaciente,
    personal: personal,
    donativos: donativos,
    presupuestos: presupuestos
}