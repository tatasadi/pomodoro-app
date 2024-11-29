'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { kumbhSans, robotoSlab, spaceMono } from './font'

interface SettingContextType {
	font: string
	setFont: React.Dispatch<React.SetStateAction<string>>
	color: string
	setColor: React.Dispatch<React.SetStateAction<string>>
}

const SettingContext = createContext<SettingContextType | undefined>(undefined)

export const SettingContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [font, setFont] = useState('kumbhSans')
	const [color, setColor] = useState('red')

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
		<SettingContext.Provider value={{ font, setFont, color, setColor }}>
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
