'use client'

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { kumbhSans, robotoSlab, spaceMono } from './font'

interface SettingContextType {
	font: string
	setFont: React.Dispatch<React.SetStateAction<string>>
	color: string
	setColor: React.Dispatch<React.SetStateAction<string>>
	times: { pomodoro: number; shortBreak: number; longBreak: number }
	setTimes: React.Dispatch<
		React.SetStateAction<{ pomodoro: number; shortBreak: number; longBreak: number }>
	>
}

const SettingContext = createContext<SettingContextType | undefined>(undefined)

export const SettingContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [font, setFont] = useState('kumbhSans')
	const [color, setColor] = useState('red')
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

	useEffect(() => {
		document.documentElement.style.setProperty(
			'--selected-color',
			color === 'red' ? '#F87070' : color === 'cyan' ? '#70F3F8' : '#D881F8',
		)
	}, [color])

	return (
		<SettingContext.Provider value={{ font, setFont, color, setColor, times, setTimes }}>
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
