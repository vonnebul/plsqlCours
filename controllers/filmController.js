const pool = require('../db.js')

exports.getFilm = async(req, res) =>{
    let conn;
    conn = await pool.getConnection();
    const rows = await conn.query('SELECT * FROM film;')
    res.status(200).json(rows)
};

exports.getFilmPS = async(req, res) =>{
    let conn;
    conn = await pool.getConnection();
    const rows = await conn.query('CALL get_all_films();')
    const convertedRows = JSON.parse(JSON.stringify(rows, (key, value) =>
        typeof value === 'bigint' ? value.toString() : value
    ));
    res.status(200).json(convertedRows)
};