// @flow
import OAuth from './OAuth';
import WindowState from './WindowState';

export default class Config {
  oauth: OAuth;
  windowState: WindowState;

  constructor({ oauth = {}, windowState = {} }) {
    this.oauth = new OAuth(oauth);
    this.windowState = new WindowState(windowState);
  }

  getAccessToken(): string {
    return this.oauth.getAccessToken();
  }

  getWindowState(): string {
    return this.windowState.getValues();
  }
}
