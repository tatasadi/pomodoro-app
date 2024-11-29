'use client'

import SettingIcon from '@/components/icons/setting-icon'
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
} from '@/components/ui/dialog'
import { kumbhSans, robotoSlab, spaceMono } from '@/app/font'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { useSetting } from '@/app/setting-context'

export default function Setting() {
	const { font, setFont } = useSetting()

	return (
		<Dialog>
			<DialogTrigger>
				<SettingIcon />
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle className="text-left text-[1.75rem] font-bold">Setting</DialogTitle>
					<div className="h-[1px] w-full bg-[#E3E1E1]"></div>
					<div className="[&>div>h3]:text-[0.6875rem] font-bold [&>div>h3]:tracking-[0.26444rem] text-dark px-6 sm:[&>div>h3]:text-[0.8125rem] [&>div]:py-6">
						<div>
							<h3>TIME (MINUTES)</h3>
						</div>
						<div className="border-y flex flex-col gap-4 sm:flex-row sm:justify-between items-center">
							<h3>FONT</h3>
							<div className="flex gap-4 justify-center">
								<Button
									variant="fontButton"
									className={cn(kumbhSans.className, font === 'kumbhSans' && 'text-white bg-dark')}
									onClick={() => setFont('kumbhSans')}
								>
									Aa
								</Button>
								<Button
									variant="fontButton"
									className={cn(
										robotoSlab.className,
										'font-medium',
										font === 'robotoSlab' && 'text-white bg-dark',
									)}
									onClick={() => setFont('robotoSlab')}
								>
									Aa
								</Button>
								<Button
									variant="fontButton"
									className={cn(spaceMono.className, font === 'spaceMono' && 'text-white bg-dark')}
									onClick={() => setFont('spaceMono')}
								>
									Aa
								</Button>
							</div>
						</div>
						<div>
							<h3>COLOR</h3>
						</div>
					</div>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}
