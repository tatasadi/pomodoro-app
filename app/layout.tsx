import type { Metadata } from 'next'
import './globals.css'
import { SettingContextProvider } from './setting-context'

export const metadata: Metadata = {
	title: 'Pomodoro App',
	description:
		'Boost your productivity with our Pomodoro Timer App! Effortlessly manage your work and breaks using the proven Pomodoro Technique. Customize timer settings, track progress visually with a dynamic circular progress bar, and stay focused with a sleek, intuitive interface. Perfect for students, professionals, and anyone looking to enhance time management. Start achieving more today!',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<SettingContextProvider>
			<html lang="en">
				<body className={`antialiased`}>{children}</body>
			</html>
		</SettingContextProvider>
	)
}
