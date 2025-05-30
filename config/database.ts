module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'your_database_name'),
      user: env('DATABASE_USERNAME', 'your_username'),
      password: env('DATABASE_PASSWORD', 'your_password'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});