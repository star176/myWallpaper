import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      setWallpaper: (url: string, directory: string) => Promise<void>
      downloadImage: (url: string) => Promise<void>
      checkDirectory: (directory: string) => Promise<boolean>
      setImageSaveDirectory: () => Promise<string | undefined>
    }
  }
}
