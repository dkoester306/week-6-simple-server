/*
- For this demo,  we are jamming all of our web service logic into one file.
- Hopefully, this makes it easier to understand what all the JS is doing.
- However, DO NOT use this approach in Project 1!
- Instead, use the very nicely architected approach of multiple JS files that we have
- been doing in the HW assignments!

*/

const http = require('http');
const url = require('url');
const query = require('querystring');
const fs = require('fs');
const port = process.env.PORT || process.env.NODE_PORT || 3000;

let jokesArray;

// request handlers

// urlStruct

// onRequest


let init = () => {
	// load jokes
	const jokes = fs.readFileSync(`${__dirname}/jokes.json`);
	
	// create server
	http.createServer(onRequest).listen(port);
	console.log(`Listening on 127.0.0.1: ${port}`);
}

//init();
