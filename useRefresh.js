import { useEffect, useRef, useState } from "react";

const handlers = {};
const isDev = process.env.NODE_ENV === "development";

export function refresh(name, data = null) {
	// 1. Validate
	if (!name && isDev) console.warn("[refresh] No name provided");
	if (!name) return;

	// 2. Check existence
	if (isDev && !handlers[name]) console.warn(`No component named "${name}" registered for refresh`);

	// 3. Execute
	if (handlers[name]) handlers[name](data);
}

export function useRefresh(name) {
	const dataRef = useRef(null);
	const [, setTick] = useState(0);

	useEffect(() => {
		// 1. Validate
		if (!name && isDev) console.warn("useRefresh() called without a name");
		if (!name) return;

		// 2. Check duplicate
		if (isDev && handlers[name]) console.warn(`usRefresh() called with "${name}" - Name allready registered`);

		// 3. Register
		const handler = data => {
			dataRef.current = data;
			setTick(t => t + 1);
		};
		handlers[name] = handler;

		// 4. Cleanup
		return () => {
			if (handlers[name] === handler) delete handlers[name];
		};
	}, [name]);

	return dataRef.current;
}