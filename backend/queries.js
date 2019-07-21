const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Notification',
  password: '12345678',
  port: 5432,
})

const getMessageByFlag = (request, response) => {
  const flag = parseInt(request.params.flag)

  pool.query('SELECT * FROM message WHERE flag = $1', [flag], (error, results) => {
	  console.log(results);
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createMessage = (request, response) => {
  const { message, flag } = request.body

  pool.query('INSERT INTO message (message, flag) VALUES ($1, $2)', [message, flag], (error, results) => {
	console.log(results);
    if (error) {
      throw error
    }
    response.status(201).send(`${results.rowCount} row added successfully!`)
  })
}



module.exports = {
  getMessageByFlag,
  createMessage

}