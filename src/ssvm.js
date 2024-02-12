import gradule from './Gradule-web';
import { WOSScript } from './wosscript';

class ShoutScriptVM {
  constructor() {
    this.memory = new Map();
    this.fs = new VirtualFileSystem();
    this.stack = [];
    this.returnValue = undefined;

    // ---

    this.registeredSyscalls = {
      'print': this.sysPrint.bind(this),
      'readFile': this.fs.readFile.bind(this.fs),
      'writeFile': this.fs.writeFile.bind(this.fs),
      'deleteFile': this.fs.deleteFile.bind(this.fs)
    };
  }

  syscall(name, ...args) {
    const syscallHandler = this.registeredSyscalls[name];
    if (syscallHandler) {
      return syscallHandler(...args);
    } else {
      throw new Error(`Unknown syscall: ${name}`);
    }
  }

  sysPrint(data) {
    print(data, [...g_.preset.kyoto, ...g_.preset.wiretap]); // Dope
  }

  loadAndExecute(scriptText) {
    try {
      const instructions = this.parseScript(scriptText);
      instructions.forEach(instruction => this.executeInstruction(instruction));
      this.syscall('print', `Execution completed.`);
    } catch (error) {
      this.syscall('print', `Error during execution: ${error.message}`);
    }
  }

  parseScript(scriptText = '') {
    // BASH LIKE PARSING
    const instructions = [];
    let currentInstruction = '';
    let inString = false;
    let inComment = false;

    let splits = scriptText.split('\n');
    return splits.map(line => {
      return line.split(/\s/g);
    })
  }

  executeInstruction(instruction) {
    
  }

}

class VirtualFileSystem {
  constructor() {
    this.files = new Map();
  }

  readFile(path) {
    return this.files.get(path) || null;
  }

  writeFile(path, data) {
    this.files.set(path, data);
  }

  deleteFile(path) {
    return this.files.delete(path);
  }
}
