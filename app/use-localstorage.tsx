import { useState } from 'react'

function useLocalStorage<T>(key: string, initialValue: T) {
	// State to store the current value
	const [storedValue, setStoredValue] = useState<T>(() => {
		try {
			// Check if the value already exists in local storage
			const item = window.localStorage.getItem(key)
			// If it exists, parse it; otherwise, set the initial value
			if (item) {
				return JSON.parse(item)
			} else {
				// Set initial value in local storage
				window.localStorage.setItem(key, JSON.stringify(initialValue))
				return initialValue
			}
		} catch (error) {
			console.error('Error accessing local storage', error)
			return initialValue
		}
	})

	// Function to update the stored value
	const setValue = (value: T | ((val: T) => T)) => {
		try {
			const valueToStore = value instanceof Function ? value(storedValue) : value
			setStoredValue(valueToStore)
			// Save to local storage
			window.localStorage.setItem(key, JSON.stringify(valueToStore))
		} catch (error) {
			console.error('Error writing to local storage', error)
		}
	}

	return [storedValue, setValue] as const
}

export default useLocalStorage
