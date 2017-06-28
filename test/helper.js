import { JSDOM } from "jsdom";
import raf from "raf";

const dom = new JSDOM(
  '<!DOCTYPE html><div class="root"></div><script></script>'
);

global.window = dom.window;
global.document = window.document;

raf.polyfill();
