import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import sqlite3 from 'sqlite3'
const _dirname = dirname(fileURLToPath(import.meta.url))
const db = new sqlite3.Database(join(_dirname, 'data.sqlite'))

export default db;