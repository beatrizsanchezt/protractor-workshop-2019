export class FileService {
  private fileSystem = require('fs');

  public cleanFolder() {
    const folderName = `${process.cwd()}/temp`;
    const files = this.fileSystem.readdirSync(folderName);
    if (files.length > 0) {
      for (let i = 0; i < files.length; i += 1) {
        const filePath = `${folderName}/${files[i]}`;
        this.fileSystem.unlinkSync(filePath);
      }
    }
  }

  public validateFile(filePath: string): boolean {
    this.fileSystem.accessSync(`${process.cwd()}/${filePath}`, this.fileSystem.F_OK, () => {
      return false;
    });
    return true;
  }

  public renameFile(fileName: string) {
    const folderName = `${process.cwd()}/temp`;
    const files = this.fileSystem.readdirSync(folderName);
    if (files.length > 0) {
      for (let i = 0; i < files.length; i += 1) {
        this.fileSystem.renameSync(`${folderName}/${files[i]}`, `${folderName}/${fileName}`);
      }
    }
  }

  public readFile(fileName: string): Buffer {
    const folderName = `${process.cwd()}/temp`;
    return this.fileSystem.readFileSync(`${folderName}/${fileName}`, 'utf8');
  }
}
