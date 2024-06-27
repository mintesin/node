import {dirname,join} from 'path'
import { fileURLToPath } from 'url'
import createDB from './db.mjs'
import Blog from './blog.mjs'
/*
This where the function summing the action of creating a database(CreateDB) and interacting(Blog) whit database takes place.
*/
_dirname=dirname(fileURLToPath(import.meta.url))
async function main() {
    const Db = createDB(join(_dirname, 'data.sqlite'))
    const blog = new Blog(creatDb) //dependency Injection takes place here 
    await blog.initialize()
    const allpost=await blog.getAllposts()
}
main().catch(err)
