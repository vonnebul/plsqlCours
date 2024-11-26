const pool = require('../db.js')

exports.getFilm = async(req, res) =>{
    let conn;
    conn = await pool.getConnection();
    const rows = await conn.query('SELECT * FROM film;')
    res.status(200).json(rows)
};

