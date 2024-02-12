export as namespace fsWeb;

export interface DirectoryEntry {
  path: string;
  name: string;
  dir: string;
  type: string;
  readFile(callback?: (err: Error | null, data?: ArrayBuffer | string) => void): Promise<ArrayBuffer | string>;
}

export function readFile(fileName: string, callback?: (err: Error | null, data?: ArrayBuffer) => void): Promise<ArrayBuffer>;
export function readString(fileName: string, callback?: (err: Error | null, data?: string) => void): Promise<string>;
export function writeFile(fileName: string, data: ArrayBuffer | string, callback?: (err: Error | null) => void): Promise<void>;
export function removeFile(fileName: string, callback?: (err: Error | null) => void): Promise<void>;
export function readdir(directoryName: string, callback?: (err: Error | null, entries?: DirectoryEntry[]) => void): Promise<DirectoryEntry[]>;
export function mkdir(fullPath: string, callback?: (err: Error | null) => void): Promise<void>;
export function rmdir(fullPath: string, callback?: (err: Error | null) => void): Promise<void>;