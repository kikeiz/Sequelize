module.exports = {
    database: {
            username: "foo",
            password: "bar",
            database: "login",
            host: "localhost",
            dialect: "mysql",
            port: 3306,
            migrationStorage: 'sequelize',
            migrationStorageTableName: 'migrations',
            define: {
                timestamps: false,
                underscored: true
            }
    
     
    }
}