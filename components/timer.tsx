import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Button } from './ui/button'
import useSound from 'use-sound'
import { cn } from '@/lib/utils'
import { useSetting } from '@/app/setting-context'

interface TimerProps {
	time: number // Time in seconds
}

const Timer: React.FC<TimerProps> = ({ time }) => {
	const { font } = useSetting()
	const [play] = useSound('/timer.mp3')
	const [remainingTime, setRemainingTime] = useState(time)
	const [isRunning, setIsRunning] = useState(false)
	const timerRef = useRef<NodeJS.Timeout | null>(null)

	//const progress = ((time - remainingTime) / time) * 100

	const handleToggle = () => {
		setIsRunning(!isRunning)
	}

	const handleReset = useCallback(() => {
		setIsRunning(false)
		setRemainingTime(time)
	}, [time])

	useEffect(() => {
		setRemainingTime(time)
	}, [time])

	useEffect(() => {
		if (isRunning && remainingTime > 0) {
			timerRef.current = setInterval(() => {
				setRemainingTime(prev => prev - 1)
			}, 1000)
		} else {
			if (timerRef.current) {
				clearInterval(timerRef.current)
			}

			if (remainingTime === 0) {
				play()
				handleReset()
			}
		}

		// Cleanup timer on unmount
		return () => {
			if (timerRef.current) clearInterval(timerRef.current)
		}
	}, [handleReset, isRunning, play, remainingTime, time])

	// Format time into MM:SS
	const formatTime = (seconds: number) => {
		const minutes = Math.floor(seconds / 60)
		const secs = seconds % 60
		return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
	}

	return (
		<div>
			<div className="bg-[linear-gradient(315deg,#2E325A_0%,#0E112A_100%)] rounded-full p-4 shadow-[-50px_-50px_100px_0px_#272C5A,50px_50px_100px_0px_#121530]">
				<div
					onClick={handleToggle}
					className="relative size-[16.73781rem] sm:size-[22.875rem] flex items-center justify-center rounded-full bg-dark text-light-gray cursor-pointer"
				>
					{/* Timer Text */}
					<div className="text-center">
						<div
							className={cn(
								'text-[5rem] sm:text-[6.25rem] tracking-[-0.25rem] sm:tracking-[-0.3125rem]',
								font === 'spaceMono' ? 'font-medium' : 'font-bold',
							)}
						>
							{formatTime(remainingTime)}
						</div>
						<div className="text-sm md:text-base uppercase mt-3 tracking-[0.82031rem] sm:mt-5 sm:tracking-[0.9375rem]">
							{isRunning ? 'Pause' : 'Start'}
						</div>
					</div>
				</div>
			</div>
			<Button className="mt-20" onClick={handleReset}>
				Reset
			</Button>
		</div>
	)
}

export default Timer
