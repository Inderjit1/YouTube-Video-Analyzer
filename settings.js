module.exports = {
    port: process.env.PORT || 3000,
    env: process.env.ENV || 'development',
    development: {
        db:{
            dialect: 'mongodb',
            url: 'mongodb://localhost:27017/YouTube',
            storage: 'C:\\data\\db'
        }
    },

    production:{
        db: {
            dialect: 'mongodb',
            storage: 'C:\\data\\db'
        }
    }
}



