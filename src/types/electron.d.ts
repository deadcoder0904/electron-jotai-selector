import type { Config } from '../store/index'

// ElectronAPI interface exposed through contextBridge
export interface ElectronAPI {
	// Config methods
	getConfig: () => Promise<Config>
	updateConfig: (config: Partial<Config>) => Promise<Config>
}

// Add ElectronAPI to Window interface
declare global {
	interface Window {
		electronAPI: ElectronAPI
	}
}
