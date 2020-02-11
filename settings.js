module.exports = {
    port: process.env.PORT || 3000,
    env: process.env.ENV || 'development',
    development: {
        db:{
            dialect: 'mongodb',
            dev_url: 'mongodb://localhost:27017/YouTube',
            url: 'mongodb+srv://dbUser:hahaha123@cluster0-rc4di.mongodb.net/test?retryWrites=true&w=majority',
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



