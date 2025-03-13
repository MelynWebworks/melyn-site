import Image from "next/image";
import MelynNavbar from "@/components/melynnavbar";
import MelynFooter from "@/components/melynfooter";
import MelynCTA from "@/components/melyncta";

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen">
			<MelynNavbar/>

			<main className="flex-grow flex flex-col items-center justify-center">
				<section id="about"></section>
				<section id="offerings"></section>
			
				<section id="call-to-action"><MelynCTA/></section>
			</main>
			
			<MelynFooter />
		</div>
	);
}
