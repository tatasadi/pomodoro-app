'use client'
import { useState } from 'react'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'

export default function NumberInput({
	label,
	name,
	defaultValue,
	handleUpdate,
}: {
	label: string
	name: string
	defaultValue?: number
	handleUpdate?: (newValue: number) => void
}) {
	const [value, setValue] = useState(defaultValue || 0)

	function onChange(newValue: number) {
		setValue(newValue)
		if (handleUpdate) {
			handleUpdate(newValue)
		}
	}

	return (
		<div className="grid grid-cols-2 sm:grid-cols-1">
			<Label
				htmlFor={name}
				className="text-background/40 text-left self-center sm:mb-[0.62rem] text-xs font-bold"
			>
				{label}
			</Label>
			<div className="relative">
				<Input
					type="number"
					id={name}
					name={name}
					min={0}
					value={value}
					onChange={e => onChange(Number(e.target.value))}
					className="bg-light-gray border-none shadow-none rounded-[0.625rem]"
				/>
				<IoIosArrowUp
					className="text-background/40 text-xl absolute right-4 top-0 cursor-pointer"
					onClick={() => onChange(value + 1)}
				/>
				<IoIosArrowDown
					className="text-background/40 text-xl absolute right-4 bottom-0 cursor-pointer"
					onClick={() => onChange(value - 1 > 0 ? value - 1 : 0)}
				/>
			</div>
		</div>
	)
}
