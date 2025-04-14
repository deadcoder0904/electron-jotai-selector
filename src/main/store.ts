import Store from 'electron-store'
import { settings } from '../store/index'
import type { Settings } from '../types/index'

// Store.initRenderer();
export const store = new Store<Settings>({
	name: 'config',
	clearInvalidConfig: true,
	defaults: settings,
})
