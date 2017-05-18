// @flow
import ElectronConfig from 'electron-config';
import type { Config } from '../domain/config/Config';

export class ConfigRepository {
  database: ElectronConfig;

  constructor(database: ElectronConfig) {
    this.database = database;
  }

  get(): Config {
    return this.database.get('config');
  }

  save(config: Config) {
    this.database.set('config', config);
  }
}

export default new ConfigRepository(
  new ElectronConfig({
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
  })
);
