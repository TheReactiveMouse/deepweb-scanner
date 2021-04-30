const { request } = require("node:http");
const scanner = require("superagent");
const fs = require('fs');
const prompt = require('prompt-sync')();
var protocol_type = "";
var term = require( 'terminal-kit' ).terminal ;
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

console.log("How much sites we are will scan today in WWW?");
const selection = prompt('>');
console.log("And.. Select port to scan, you can scan HTTPS or HTTP and etc");
const port = prompt(">");
console.log("HTTPS[1] or HTTP[2]?");
const protocol = prompt(">");
if (!selection || !port || protocol != 1 && protocol != 2){
    console.log("No data.Exiting...");
} else {
        if (protocol == "1"){
            protocol_type = "https://";
        } else {
            protocol_type = "http://";
        }
            for (var x = 0; x < selection; x += 1){
                const value1 = getRandomInt(255);
                const value2 = getRandomInt(255);
                const value3 = getRandomInt(255);
                const value4 = getRandomInt(255);
                console.log(`Scanning site ${value1}.${value2}.${value3}.${value4}...`);
                
                scanner.get(`${protocol_type}${value1}.${value2}.${value3}.${value4}:${port}/index.html`, (err, result) => {
                    try{
                        if (result.status == 200 || result.status == 404){
                             console.log(`[ ${result.status} ] ${protocol_type}${value1}.${value2}.${value3}.${value4} is online!`);
                            fs.appendFile("alive.txt", `${protocol_type}${value1}.${value2}.${value3}.${value4} [OK]\r\n`, (err) => {
                            }) ;
                        } else {
                            console.log(`[ ${result.status} ] ${protocol_type}${value1}.${value2}.${value3}.${value4} has not success code.`);
                            fs.appendFile("dead.txt", `${protocol_type}${value1}.${value2}.${value3}.${value4} [FAIL]\r\n`, (err) => {
                            });
                        }
                    } catch {
                    }
                });
            }
}