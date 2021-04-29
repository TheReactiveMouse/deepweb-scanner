const { request } = require("node:http");
const scanner = require("superagent");
const fs = require('fs');
const prompt = require('prompt-sync')();
var term = require( 'terminal-kit' ).terminal ;
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

console.log("How much sites we are will scan today in WWW?");
const selection = prompt('>');

if (!selection){
    console.log("No data.Exiting...");
} else {
            for (var x = 0; x < selection; x += 1){
                const value1 = getRandomInt(255);
                const value2 = getRandomInt(255);
                const value3 = getRandomInt(255);
                const value4 = getRandomInt(255);
                console.log(`Scanning site ${value1}.${value2}.${value3}.${value4}...`);
                scanner.get(`http://${value1}.${value2}.${value3}.${value4}/index.html`, (err, result) => {
                    try{
                        if (result.status == 200 || result.status == 404){
                             console.log(`[ ${result.status} ] http://${value1}.${value2}.${value3}.${value4} is online!`);
                            fs.appendFile("alive.txt", `http://${value1}.${value2}.${value3}.${value4} [OK]`, (err) => {
                            }) ;
                        } else {
                            console.log(`[ ${result.status} ] http://${value1}.${value2}.${value3}.${value4} has not success code.`);
                            fs.appendFile("dead.txt", `http://${value1}.${value2}.${value3}.${value4} [FAIL]\n`, (err) => {
                            });
                        }
                    } catch {
                    }
                });
            }
}