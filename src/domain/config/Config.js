// @flow
import type { OAuth, AccessToken } from "./OAuth";
import type { WindowState } from "./WindowState";

export type Config = {
  oauth: OAuth,
  windowState: WindowState
};
