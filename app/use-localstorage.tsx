import { useState, useEffect } from 'react'

function useLocalStorage<T>(key: string, initialValue: T) {
	const [storedValue, setStoredValue] = useState<T>(initialValue)

	useEffect(() => {
		try {
			const item = window.localStorage.getItem(key)
			if (item) {
				setStoredValue(JSON.parse(item))
			}
		} catch (error) {
			console.error('Error accessing local storage', error)
		}
	}, [key])

	const setValue = (value: T | ((val: T) => T)) => {
		try {
			const valueToStore = value instanceof Function ? value(storedValue) : value
			setStoredValue(valueToStore)
			window.localStorage.setItem(key, JSON.stringify(valueToStore))
		} catch (error) {
			console.error('Error writing to local storage', error)
		}
	}

	return [storedValue, setValue] as const
}

export default useLocalStorage
