import About from '@/components/About';
import AboutAvatar from '@/components/AboutAvatar';
import PastClient from '@/components/PastClient';
import PastClientReview from '@/components/PastClientReview';
import WhatImDoing from '@/components/WhatImDoing';

export default function Home() {
	return (
		<>
			<About />
			<AboutAvatar />
			<WhatImDoing />
			<PastClient />
			<PastClientReview />
		</>
	);
}
