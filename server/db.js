const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: 'Mercedes@33527',
  host: 'localhost',
  port: 5433, // default Postgres port
  database: 'AccountingDB'
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};
