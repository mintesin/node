import { promises as fspromises } from "fs";
import objectPath from "object-path";

export class ConfigTemplate {
  async load(file) {
    console.log(`Deserializing from ${file}`);
    this.data = this._deserialize(await fspromises.readFile(file, "utf-8"));
  }
  async save(file) {
    console.log(`Serializing to ${file}`);
    await fspromises.writeFile(file, this._serialize(this.data));
  }
}
