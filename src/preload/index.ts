import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import { ipcRenderer } from 'electron/renderer'

import type { DefaultConfig, Provider, Settings } from '../types/index'

// Custom APIs for renderer
export const api = {
	getConfig: (): Promise<Settings> => ipcRenderer.invoke('get-config'),
	changeProviders: (providers: Provider[]): Promise<Provider[]> =>
		ipcRenderer.invoke('change-providers', providers),
	changeDefaultProvider: (
		defaultConfig: DefaultConfig,
	): Promise<DefaultConfig> =>
		ipcRenderer.invoke('change-default-provider', defaultConfig),
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
	try {
		contextBridge.exposeInMainWorld('electron', electronAPI)
		contextBridge.exposeInMainWorld('api', api)
	} catch (error) {
		console.error(error)
	}
} else {
	// @ts-ignore (define in dts)
	window.electron = electronAPI
	// @ts-ignore (define in dts)
	window.api = api
}
