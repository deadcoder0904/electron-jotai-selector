import React from 'react'
import { useSetAtom } from 'jotai'

import { ProviderSelector } from './components/ProviderSelector'
import { APIKeyInput } from './components/APIKeyInput'
import { providersAtom, selectionAtom } from './store/jotai'

function App(): React.JSX.Element {
	const setProviders = useSetAtom(providersAtom)
	const setSelection = useSetAtom(selectionAtom)

	React.useEffect(() => {
		// On first render, pull the real config from the main process
		window.api.getConfig().then((config) => {
			console.log('Load default config from config.json:')
			console.log(JSON.stringify(config, null, 2))
			setProviders(config.providers)
			setSelection(config.selection)
		})
	}, [])

	return (
		<div style={{}}>
			<h1>API Providers</h1>
			<ProviderSelector />
			<APIKeyInput />
		</div>
	)
}

export default App
