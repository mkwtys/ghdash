// @flow
export default class OAuth {
  accessToken: string;

  constructor({ accessToken }) {
    this.accessToken = accessToken;
  }

  getAccessToken(): string {
    return this.accessToken;
  }
}
