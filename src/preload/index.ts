import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import { ipcRenderer } from 'electron/renderer'

import type { ProvidersState, SelectionState } from '../types/index'

// Custom APIs for renderer
export const api = {
	getConfig: (): Promise<
		{ providers: ProvidersState; selection: SelectionState }
	> => ipcRenderer.invoke('get-config'),
	changeProviders: (providers: ProvidersState): Promise<ProvidersState> =>
		ipcRenderer.invoke('change-providers', providers),
	changeDefaultProvider: (
		selection: SelectionState,
	): Promise<SelectionState> =>
		ipcRenderer.invoke('change-default-provider', selection),
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
