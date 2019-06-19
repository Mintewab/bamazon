var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table3');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",
    password: "Alexwork12345%",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if(err) throw err;
    console.log("connection ID" + connection.threadId);
    productItem();
})


function productItem(){
    connection.query("SELECT * FROM products", function (err,res) {
        if(err) throw err;
 