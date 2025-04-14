import React from 'react'
import { useAtom } from 'jotai'
import { settingsAtom } from '../../../store/index'

export const APIKeyInput = () => {
	const [settings, updateSettings] = useAtom(settingsAtom)
	// Get the currently selected provider
	const selectedProvider = settings.providers.find(
		(p) => p.id === settings.default.provider,
	)

	const placeholder = settings.default.provider === 'openai'
		? 'Enter OpenAI API key'
		: 'Enter Gemini API key'

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()
		if (!selectedProvider) return

		const updatedProviders = settings.providers.map((provider) => {
			if (provider.id === selectedProvider.id) {
				return { ...provider, apiKey: e.target.value }
			}
			return provider
		})
		updateSettings({ ...settings, providers: updatedProviders })
	}

	if (!selectedProvider) return null

	return (
		<div style={{ marginTop: 5 }}>
			<label htmlFor={`apiKey-${selectedProvider.id}`}>API Key:</label>
			<input
				id={`apiKey-${selectedProvider.id}`}
				type='text'
				value={selectedProvider.apiKey}
				onChange={handleChange}
				placeholder={placeholder}
				autoComplete='off'
			/>
		</div>
	)
}
