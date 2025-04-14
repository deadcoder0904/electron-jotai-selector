import { ProviderSelector } from './components/ProviderSelector'
import { APIKeyInput } from './components/APIKeyInput'

function App(): JSX.Element {
	const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

	return (
		<div style={{}}>
			<h1>API Providers</h1>
			<ProviderSelector />
			<APIKeyInput />
		</div>
	)
}

export default App
