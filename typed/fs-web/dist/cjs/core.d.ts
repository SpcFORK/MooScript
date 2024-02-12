import DirectoryEntry from './directory_entry';

export function ab2str(buf: ArrayBuffer): string;
export function str2ab(str: string): ArrayBuffer;
export function readFile(fileName: string): Promise<ArrayBuffer>;
export function readString(fileName: string): Promise<string>;
export function writeFile(fileName: string, data: ArrayBuffer | string): Promise<void>;
export function removeFile(fileName: string): Promise<void>;
export function readdir(directoryName: string): Promise<DirectoryEntry[]>;
export function mkdir(fullPath: string): Promise<void>;
export function rmdir(fullPath: string): Promise<void>;