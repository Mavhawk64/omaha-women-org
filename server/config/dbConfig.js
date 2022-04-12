const config = {
   host:'ec2-18-224-229-247.us-east-2.compute.amazonaws.com',
   user:'newmysqlremoteuser',
   password: 'mypassword',
   database:'OIWC',
   // socketPath: '/var/run/mysqld/mysqld.sock',
   pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
   }
}

export default config;