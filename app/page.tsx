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

export default function Home() {
	return (
		<main className="p-4">
			<Dialog>
				<DialogTrigger>
					<SettingIcon />
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle className="text-left text-[1.75rem] font-bold">Setting</DialogTitle>
						<div className="h-[1px] w-full bg-[#E3E1E1]"></div>
						<DialogDescription>
							<div>
								<h3>TIME (MINUTES)</h3>
							</div>
							<div className="border-y flex flex-col gap-4 sm:flex-row sm:justify-between items-center">
								<h3>FONT</h3>
								<div className="flex gap-4 justify-center">
									<Button variant="fontButton" className={cn(kumbhSans.className)}>
										Aa
									</Button>
									<Button variant="fontButton" className={cn(robotoSlab.className, 'font-medium')}>
										Aa
									</Button>
									<Button variant="fontButton" className={cn(spaceMono.className)}>
										Aa
									</Button>
								</div>
							</div>
							<div>
								<h3>COLOR</h3>
							</div>
						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		</main>
	)
}
