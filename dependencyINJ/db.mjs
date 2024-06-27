import sqlite from 'sqlite3'
/*
This function creates the database we need  adn export it  for further use.
*/
function creatDB(dbFile)
{
    return sqlite.Database(dbFile)
}
module.exports= creatDB;