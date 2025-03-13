import Image from "next/image";
import MelynFooter from "@/components/melynfooter";

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen">
			<main className="flex-grow flex flex-col items-center justify-center py-2">
				<section id="about"></section>
				<section id="offerings"></section>
			</main>
			
			<MelynFooter />
		</div>
	);
}
