import { IpcMainEvent, ipcMain } from 'electron'
import { resolve } from 'path'
import wallpaper from 'wallpaper'
import { downloadFile } from '../util'
import fs from 'fs'
import { IpcMainInvokeEvent } from 'electron/main'

ipcMain.on('setWallpaper', (_event: IpcMainEvent, url: string, path: string) => {
  console.log('setWallper')
  try {
    const localFile = resolve(path, url.split('/').pop()!)
    const file = downloadFile(url, localFile)

    wallpaper.set(file, {
      screen: 'all',
      scale: 'auto'
    })
  } catch (e) {
    console.log('setWallper error', e)
  }
})
ipcMain.handle('clickDirectory', (_event: IpcMainInvokeEvent, path: string) => {
  return fs.existsSync(path)
})
