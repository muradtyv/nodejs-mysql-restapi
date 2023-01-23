module.exports ={
    HOST: "localhost",
    USER:"root",
    PASSWORD: "m.r.a.d.2001",
    DB:"nodejs",
    dialect:"mysql",

    pool:{
        max:5,
        min:0,
        acquire: 30000,
        idle:10000
    }
}