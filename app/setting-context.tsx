'use client'

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { kumbhSans, robotoSlab, spaceMono } from './font'

interface SettingContextType {
	font: string
	setFont: React.Dispatch<React.SetStateAction<string>>
	times: { pomodoro: number; shortBreak: number; longBreak: number }
	setTimes: React.Dispatch<
		React.SetStateAction<{ pomodoro: number; shortBreak: number; longBreak: number }>
	>
}

const SettingContext = createContext<SettingContextType | undefined>(undefined)

export const SettingContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [font, setFont] = useState('kumbhSans')
	const [times, setTimes] = useState({ pomodoro: 25, shortBreak: 5, longBreak: 15 })

	const fontClasses = useMemo(
		() => ({
			kumbhSans: kumbhSans.className,
			robotoSlab: robotoSlab.className,
			spaceMono: spaceMono.className,
		}),
		[],
	)

	useEffect(() => {
		document.body.classList.remove(...Object.values(fontClasses))
		document.body.classList.add(fontClasses[font as keyof typeof fontClasses])
	}, [font, fontClasses])

	return (
		<SettingContext.Provider value={{ font, setFont, times, setTimes }}>
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
