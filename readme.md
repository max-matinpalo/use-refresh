# use-refresh
**React hook to trigger component rerender from anywhere with single line of code.**  

```js
function App () {

	// 1. Register component for refresh
	useRefresh("app");
	...
}

// 2. Refresh from any other component
refresh("app");
```

## install
Package size only ~350 bytes min+gzip
```bash
npm install use-refresh
```

## useRefresh()
Registers a component to be available for refresh.

```js
import { useRefresh } from "use-refresh";

useRefresh("sidebar");
useRefresh("charts");
useRefresh("...");
```

## refresh()
Refresh a registered component by the name from any other component.

```js
import { refresh } from "use-refresh";

refresh("sidebar");
refresh("charts");
refresh("...");
```



## Optional data

You can also pass data with the refresh call.

```js
refresh("feed", data);
```

Receive it from the hook:

```js
function Feed() {
	const data = useRefresh("feed");
	...
}
```



<details>
<summary>Complete example</summary>

```js
import { useRefresh, refresh } from "use-refresh";

export default function App() {

	// 1. Register component for refresh
	let data = useRefresh("main") || "Initial State";

	return (
		<div style={{ padding: "20px" }}>
			<h1>App Data: {data}</h1>
			<Test />
		</div>
	);
}

function Test() {

	// 2. Refresh from anywhere, optional pass data
	const handler = () => refresh("main", "Updated at " + new Date().toLocaleTimeString());

	return (
		<button onClick={handler}>
			Test useRefresh
		</button>
	);
}
```
</details> 
<details>
<summary>Optional globals</summary>
If you don't want to write imports for useRefresh() and refresh()  
Just import add the following import at app start.

```JS
import "use-refresh/global"
```
</details> 


## License
MIT
