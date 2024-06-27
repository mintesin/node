
import db from './db.mjs'
import { promisify } from 'util'


const dbRun = promisify(db.run.bind(db))
const dbAll = promisify(db.all.bind(db))

class Blog{
    initialize() {
        const initQuery = `CREATE TABLE IF NOT EXISTS posts(
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
        ) `
        
            return dbRun(initQuery)
    }
    createPost(id,title,content,createdAt) {
        return dbRun(`INSERT INTO posts VALUES (?,?,?,?)`,id,title,content,createdAt)
    }
    getAllPost() {
        return dbAll(`SELECT * FROM posts ORDER BY created_at DESC`)
    }

}

export default Blog;