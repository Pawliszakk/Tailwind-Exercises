const SuccessMessage = () => {
	return (
		<div className="bg-white w-[375px] rounded-xl py-11 px-8">
			<div className="text-darkSlateGrey">
				<img
					src="./assets1/images/icon-list.svg"
					alt="Illustration of some computer devices"
					className="w-16 h-16 my-8"
				/>
				<span className="text-5xl font-bold">Thanks for subscribing!</span>
				<p className="text-[16px] my-6">
					A confirmation has been sent to{' '}
					<span className="font-bold">ash@loremcompany.com</span>. Please open
					it and click the button inside to confirm your subscription
				</p>
			</div>
			<button className="bg-darkSlateGrey text-white text-[16px] w-full py-4 rounded-lg my-8 hover:bg-charcoalGrey transition-colors">
				Dismiss message
			</button>
		</div>
	);
};

export default SuccessMessage;
