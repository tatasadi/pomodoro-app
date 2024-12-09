import Setting from '@/components/setting'
import Pomodoro from '@/components/pomodoro'

export default function Home() {
	return (
		<main className="p-4 flex flex-col gap-20 sm:gap-36 items-center">
			<h1 className="sr-only">Pomodoro App</h1>
			<Pomodoro />
			<Setting />
		</main>
	)
}
