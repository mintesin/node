import { Config } from './config.mjs'
import { iniStrategy } from './in.mjs'
import { jsonStrategy } from './js.mjs'

async function main() {
    const config = new Config(iniStrategy)
    
}