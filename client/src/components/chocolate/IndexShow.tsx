const IndexShow = ({ index }: { index: number }) => {
	return (
		<div className="absolute left-1/2 top-[53.5%] flex size-8 -translate-x-1/2 rotate-45 items-center justify-center border-2 border-slate-950/80 bg-brand-dark shadow-pqina-2">
			<div className="-rotate-45">
				<span className="block -translate-y-[1.5px] font-crimsonPro text-base font-semibold text-secondary-dark">
					{index < 10 ? `0${index}` : index}
				</span>
			</div>
		</div>
	);
};

export default IndexShow;
