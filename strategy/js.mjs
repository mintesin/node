import { JSON } from 'json'
export const jsonStrategy = {
    deserialize: data => JSON.parse(data),
    serialize:data=>JSON.stringify(data,null,' ')
}