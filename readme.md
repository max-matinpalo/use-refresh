# use-refresh
**Trigger react component rerender from anywhere with single line of code.**

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



## Summary

<table>
<tr><td><b><code>useRefresh("name")</code></b></td><td>register component for refresh</td></tr>
<tr><td><b><code>refresh("name")</code></b></td><td>trigger refresh from any other component</td></tr>
</table>


**Package size only ~350 bytes min+gzip**


---

#### Optional globals
If you don't want to write imports of the `refresh()` and `useRefresh()`  
Just import at app start the following file.

```JS
import "use-refresh/global"
```



## License
MIT
