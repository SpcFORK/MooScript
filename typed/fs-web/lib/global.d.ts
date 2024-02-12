import * as fs from 'fs-web';

declare global {
  interface Window {
    fsWeb: typeof fs;
  }
}

export {};