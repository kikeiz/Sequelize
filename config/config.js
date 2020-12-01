module.exports = {
    development: {
            username: "root",
            password: "root",
            database: "Prueba",
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