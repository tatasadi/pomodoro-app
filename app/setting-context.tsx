'use client'

import React, { createContext, useContext, useEffect, useMemo } from 'react'
import { kumbhSans, robotoSlab, spaceMono } from './font'
import useLocalStorage from './use-localstorage'

interface SettingContextType {
	font: string
	setFont: React.Dispatch<React.SetStateAction<string>>
	times: { pomodoro: number; shortBreak: number; longBreak: number }
	setTimes: React.Dispatch<
		React.SetStateAction<{ pomodoro: number; shortBreak: number; longBreak: number }>
	>
	color: string
	setColor: React.Dispatch<React.SetStateAction<string>>
}

const SettingContext = createContext<SettingContextType | undefined>(undefined)

export const SettingContextProvider = ({ children }: { children: React.ReactNode }) => {
	// Use `useLocalStorage` for state persistence
	const [font, setFont] = useLocalStorage('font', 'kumbhSans')
	const [times, setTimes] = useLocalStorage('times', { pomodoro: 25, shortBreak: 5, longBreak: 15 })
	const [color, setColor] = useLocalStorage('color', 'red')

	// Map font class names
	const fontClasses = useMemo(
		() => ({
			kumbhSans: kumbhSans.className,
			robotoSlab: robotoSlab.className,
			spaceMono: spaceMono.className,
		}),
		[],
	)

	// Update body font class when font changes
	useEffect(() => {
		document.body.classList.remove(...Object.values(fontClasses))
		document.body.classList.add(fontClasses[font as keyof typeof fontClasses])
	}, [font, fontClasses])

	return (
		<SettingContext.Provider value={{ font, setFont, times, setTimes, color, setColor }}>
			{children}
		</SettingContext.Provider>
	)
}

export const useSetting = () => {
	const context = useContext(SettingContext)
	if (context === undefined) {
		throw new Error('useSetting must be used within a SettingContextProvider')
	}
	return context
}
