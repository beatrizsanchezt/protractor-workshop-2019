import * as fetch from 'isomorphic-fetch';

export class FileService {
  private fileSystem = require('fs');
  private workingdDirectory = process.cwd();

  public validateFile(fileName: string): boolean {
    const filePath = `${this.workingdDirectory}/${fileName}`;
    try {
      this.fileSystem.accessSync(filePath, this.fileSystem.F_OK, () => {
      });
    } catch {
      return false;
    }
    return true;
  }

  public async downloadFile(link: string, fileName: string) {
    const content = await fetch(link).then((response: any) => response.buffer());
    this.fileSystem.writeFileSync(`${this.workingdDirectory}/${fileName}`, content);
  }
}
