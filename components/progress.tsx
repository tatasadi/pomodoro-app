export default function Progress({ className }: { className: string }) {
	return (
		<svg
			width="260"
			height="260"
			viewBox="0 0 260 260"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			style={{ transform: 'rotate(-90deg)' }}
			className={className}
		>
			<circle
				r="114"
				cx="124"
				cy="124"
				fill="transparent"
				stroke="#161932"
				stroke-width="9px"
				strokeDasharray="715.9200000000001px"
				strokeDashoffset="0"
			></circle>
			<circle
				r="114"
				cx="124"
				cy="124"
				stroke="#76e5b1"
				stroke-width="9px"
				stroke-linecap="round"
				stroke-dashoffset="10px"
				fill="transparent"
				strokeDasharray="715.9200000000001px"
			></circle>
		</svg>
	)
}
