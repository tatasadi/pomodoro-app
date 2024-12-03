'use client'

import { kumbhSans } from '@/app/font'
import { cn } from '@/lib/utils'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function Pomodoro() {
	return (
		<div className="flex flex-col items-center text-center gap-11 sm:gap-14">
			<h2 className={cn(kumbhSans.className, 'text-2xl sm:text-[2rem] font-bold')}>pomodoro</h2>
			<Tabs defaultValue="account" className="w-[400px]">
				<TabsList>
					<TabsTrigger value="pomodoro">Pomodoro</TabsTrigger>
					<TabsTrigger value="shortBreak">Short Break</TabsTrigger>
					<TabsTrigger value="longBreak">Long Break</TabsTrigger>
				</TabsList>
				<TabsContent value="pomodoro">a</TabsContent>
				<TabsContent value="shortBreak">b</TabsContent>
				<TabsContent value="longBreak">c</TabsContent>
			</Tabs>
		</div>
	)
}
