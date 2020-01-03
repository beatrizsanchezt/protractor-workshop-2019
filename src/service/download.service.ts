import { browser } from 'protractor';
import { FileService } from '../service';

export class DownloadService {
  private fileService: FileService;

  constructor() {
    this.fileService = new FileService();
  }
  public async downloadFile(link: string, filename : string): Promise<void> {
    await browser.navigate().to(link);
    await browser.pause(45000);
    this.fileService.renameFile(filename);
  }

  public readFileFromTemp(filename: string): Buffer {
    return this.fileService.readFile(filename);
  }
}
