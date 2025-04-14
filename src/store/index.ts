import { atom } from 'jotai'
import { Settings } from '../types/index'

export const defaultSettings: Settings = {
	providers: [
		{
			id: 'openai',
			name: 'Open AI',
			models: ['gpt-4o', 'o1'],
			apiKey: '',
		},
		{
			id: 'gemini',
			name: 'Gemini',
			models: ['gemini-2.0-flash', 'gemini-2.5-pro-preview'],
			apiKey: '',
		},
	],
	default: {
		provider: 'openai',
		model: 'gpt-4',
	},
}

export const settingsAtom = atom<Settings>(defaultSettings)
