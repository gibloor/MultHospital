const poolState = require("pg").Pool

const pool = new poolState({
  user: "postgres",
  password: "postgres",
  host: 'localhost', //'localhost' || 'multhospital.com'
  port: 5432,
  database: "multhospital"
})

export default pool