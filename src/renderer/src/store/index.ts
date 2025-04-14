import { atom } from 'jotai'
import { DefaultConfig, Provider, Settings } from '../types/index'

export const settings: Settings = {
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

export const settingsAtom = atom<Settings>(settings)

export const providersAtom = atom<Provider[]>(
	(get) => get(settingsAtom).providers,
	(get, set, newProviders) => {
		const currentSettings = get(settingsAtom)
		set(settingsAtom, { ...currentSettings, providers: newProviders })
	},
)

export const defaultConfigAtom = atom<DefaultConfig>(
	(get) => get(settingsAtom).default,
	(get, set, newDefaultConfig) => {
		const currentSettings = get(settingsAtom)
		set(settingsAtom, { ...currentSettings, default: newDefaultConfig })
	},
)
