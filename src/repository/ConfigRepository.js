// @flow
import ElectronConfig from "electron-config";
import isElectron from "../util/isElectron";
import type { Config } from "../domain/config/Config";

type Database = ElectronConfig | Map<string, Config>;

export class ConfigRepository {
  database: Database;

  constructor(database: Database) {
    this.database = database;
  }

  get(): Config {
    const config: ?Config = this.database.get("config");
    if (!config) {
      throw new Error("no config");
    }
    return config;
  }

  save(config: Config) {
    this.database.set("config", config);
  }
}

let database: Database = new Map();
if (isElectron()) {
  database = new ElectronConfig({
    defaults: {
      config: {
        oauth: {
          accessToken: null
        },
        windowState: {
          width: 800,
          height: 600
        }
      }
    }
  });
}

export default new ConfigRepository(database);
