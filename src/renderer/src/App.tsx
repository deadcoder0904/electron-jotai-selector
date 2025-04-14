import React from 'react'
import { useAtom } from 'jotai'

import { ProviderSelector } from './components/ProviderSelector'
import { APIKeyInput } from './components/APIKeyInput'
import { settingsAtom } from './store/index'

function App(): React.JSX.Element {
	const [, updateSettings] = useAtom(settingsAtom)

	React.useEffect(() => {
		// On first render, pull the real config from the main process
		window.api.getConfig().then((config) => {
			console.log('Load default config from config.json:')
			console.log(JSON.stringify(config, null, 2))
			updateSettings(config)
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
