var mongoose = require('mongoose');
var dbURI = 'mongodb+srv://cns665:dkGzKxH4NJ6HcWn8@mekanbul-cluster.yyokgua.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI);
mongoose.connection.on("connected",function(){
    console.log(dbURI+"adrese bağlandı");    
})
mongoose.connect(dbURI);
mongoose.connection.on("error",function(){
    console.log(dbURI+"Bağlantı Hatası");    
})
mongoose.connect(dbURI);
mongoose.connection.on("disconnected",function(){
    console.log(dbURI+"Bağlantı kesildi");    
})
process.on("SIGINT",function(){
    mongoose.connection.close();
    console.log("uygulama kapatıldı");
    process.exit(0);

    require("./venue");    


})