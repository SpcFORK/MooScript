export default class DirectoryEntry {
  path: string;
  name: string;
  dir: string;
  type: string;
  constructor(fullPath: string, type: string);
}