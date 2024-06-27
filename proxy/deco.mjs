// Import necessary modules
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import level from 'level';
import { levelSubscribe } from './level.mjs';

// Get the current directory
const _dirname = dirname(fileURLToPath(import.meta.url));

// Set the database path
const dbPath = join(_dirname, 'db');

// Create a new LevelDB instance with JSON value encoding
const db = level(dbPath, { valueEncoding: 'json' });

// Adding the decorator to add subscribe method and matching the input and printing it
// the console 
//
levelSubscribe(db);

// Subscribe to updates for documents of type 'tweet' with language 'en'
// the subscribe method searches and matches for the input object and print out the 
// key of the input 
db.subscribe({ doctype: 'tweet', language: 'en' }, (k, val) => console.log(val));

// Put two documents into the database
//This one will be successfule beacuse it maches the pattern given to the subscribe method
db.put('1', { doctype: 'tweet', text: 'HI', language: 'en' });
//This one won't be successful because it doesn't match the given  pattern 
db.put('2', { doctype: 'company', name: 'ACME CO.' });
