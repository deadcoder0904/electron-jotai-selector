import React from 'react'
import { useAtom, useAtomValue } from 'jotai'
import { providersAtom, selectionAtom } from '../store/index'

export const APIKeyInput = () => {
	const [providers, setProviders] = useAtom(providersAtom)
	const selection = useAtomValue(selectionAtom)
	const selectedProvider = providers[selection.providerId]

	const placeholder = selection.providerId === 'openai'
		? 'Enter OpenAI API key'
		: 'Enter Gemini API key'

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()
		if (!selectedProvider) return

		const newProviders = {
			...providers,
			[selection.providerId]: {
				...selectedProvider,
				apiKey: e.target.value,
			},
		}
		setProviders(newProviders)
		window.api.changeProviders(newProviders).then((results: any) => {
			console.log('New Providers:')
			console.log(results)
		})
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
