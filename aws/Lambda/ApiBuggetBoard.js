let mysql = require('mysql');

let connection;
let queryStr;

exports.handler = async (event) => {

    // MySQL Connection Configuration
    let connectionConfig = {
        host: 'db-buggetboard.cdcuwp9lzavs.us-east-1.rds.amazonaws.com',
        user: 'admin',
        password: 'adminbuggetboard123',
        database: 'buggetboard'
    };

    // BUG API Event
    if (event.resource === '/buggetboard/bug') {
        // GET
        if (event.httpMethod === 'GET') {
            queryStr = 'SELECT BID, GID, Description, Summary, Status, Owner, CreatedBy, CreatedOn FROM Bugs';
        }
        // POST
        else if (event.httpMethod === 'POST') {
            // Not yet implemented...return for now
            return;
        }
    }
    // GROUP API EVENT
    else if (event.resource === '/buggetboard/group') {
        // GET
        if (event.httpMethod === 'GET') {
            queryStr = 'SELECT GID, GroupName FROM Groups';
        }
        // POST
        else if (event.httpMethod === 'POST') {
            // Not yet implemented...return for now
            return;
        }
    }
    // Connect and Query DB
    return queryDatabase(event, connectionConfig, queryStr);
};

function queryDatabase(event, connectionConfig, queryStr) {
    const promise = new Promise(function (resolve, reject) {

        console.log('Starting query...\n');

        connection = mysql.createConnection(connectionConfig);
        connection.connect(function (err) {
            if (err) {
                console.log('Error connecting: ' + err.stack);
                return;
            }
            console.log('Connected as ID: ' + connection.threadId + '\n');
        });

        connection.query(queryStr, function (error, results, fields) {
            if (error) {
                reject('ERROR ' + error);
            }

            if (results.length > 0) {

                let response = {
                    'isBase64Encoded': false,
                    'statusCode': 200,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'body': JSON.stringify(results)
                };

                connection.end(function (error, results) {
                    if (error) {
                        reject('ERROR ENDING CONNECTION');
                    }
                    console.log('Connection ended...');

                    resolve(response);
                });
            }
        });
    });
    return promise;
};
