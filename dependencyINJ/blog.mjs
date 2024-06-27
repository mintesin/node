import promisify from 'util'
/*
This class takes a created database and interacts with it in way of 
1.creating table
2.create post
3.get all post

*/

class Blog{
    constructor(db) {

        this.db = db
        this.dBRun = promisify(db.run.bind(db))
        this.dBAll = promisify(db.run.bind(db))
    }
    initialize() {
         const initQuery = `CREATE TABLE IF NOT EXISTS posts(
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
        ) `
        return this.dBRun(initQuery)
    }
    createPost(id, title, content, create_at) {
        return this.dBRun(`INSERT INTO posts VALUES (?,?,?,?)`,id,title,content,createdAt)
    }
    getAllPost() {
        return this.dBAll(`SELECT * FROM posts ORDER BY created_at DESC`)
    }
}
module.exports = Blog;