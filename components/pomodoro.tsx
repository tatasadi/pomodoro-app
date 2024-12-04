'use client'

import { kumbhSans } from '@/app/font'
import { cn } from '@/lib/utils'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Timer from './timer'
import { useSetting } from '@/app/setting-context'

export default function Pomodoro() {
	const { times } = useSetting()
	return (
		<div className="flex flex-col items-center text-center gap-11 sm:gap-14">
			<h2 className={cn(kumbhSans.className, 'text-2xl sm:text-[2rem] font-bold')}>pomodoro</h2>
			<Tabs defaultValue="account" className="w-[400px]">
				<TabsList>
					<TabsTrigger value="pomodoro">Pomodoro</TabsTrigger>
					<TabsTrigger value="shortBreak">Short Break</TabsTrigger>
					<TabsTrigger value="longBreak">Long Break</TabsTrigger>
				</TabsList>
				<div className="flex items-center justify-center mt-12 sm:mt-[6.81rem]">
					<TabsContent value="pomodoro">
						<Timer time={times.pomodoro * 60} />
					</TabsContent>
					<TabsContent value="shortBreak">
						<Timer time={times.shortBreak * 60} />
					</TabsContent>
					<TabsContent value="longBreak">
						<Timer time={times.longBreak * 60} />
					</TabsContent>
				</div>
			</Tabs>
		</div>
	)
}
