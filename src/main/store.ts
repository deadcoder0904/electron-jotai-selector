import Store from 'electron-store'
import { defaultSettings } from '../store/index'
import { Settings } from '../types/index'

const store = new Store<Settings>(defaultSettings)
