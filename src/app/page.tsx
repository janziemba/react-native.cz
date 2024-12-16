import Image from "next/image";

const companies = [
	{ title: "24i", url: "https://www.24i.com" },
	{ title: "3Pillar", url: "https://www.3pillarglobal.com" },
	{ title: "AdAstra", url: "https://www.adastra.cz" },
	{ title: "Belcode", url: "https://www.belcode.cz" },
	{ title: "Bootiq", url: "https://www.bootiq.io" },
	{ title: "Carvago", url: "https://www.carvago.com" },
	{ title: "CZC", url: "https://www.czc.cz" },
	{ title: "Coding Bear", url: "https://codingbear.com" },
	{ title: "Dactyl Group", url: "https://www.dactylgroup.com" },
	{ title: "Daytrip", url: "https://www.daytrip.com" },
	{ title: "edgy.digital", url: "https://www.edgy.digital" },
	{ title: "eSports", url: "https://www.esports.cz" },
	{ title: "First Line Software", url: "https://www.firstlinesoftware.com" },
	{ title: "Groupon", url: "https://www.groupon.com" },
	{ title: "Kentico", url: "https://www.kiwi.com" },
	{ title: "Kiwi", url: "https://www.kiwi.com" },
	{ title: "Kupi", url: "https://www.kupi.cz" },
	{ title: "Level.works", url: "https://cz.level.works" },
	{ title: "Mafra", url: "https://www.mafra.cz" },
	{ title: "Meddi Hub", url: "https://www.meddi.cz" },
	{ title: "OKSystem", url: "https://www.oksystem.cz" },
	{ title: "OpenVPN", url: "https://www.openvpn.net" },
	{ title: "Purple Technology", url: "https://www.purple-technology.com" },
	{ title: "Qest", url: "https://www.qest.cz" },
	{ title: "Regiojet", url: "https://www.regiojet.cz" },
	{ title: "Reservio", url: "https://www.reservio.com" },
	{ title: "Rossum.ai", url: "https://www.rossum.ai" },
	{ title: "SatoshiLabs", url: "https://satoshilabs.com/" },
	{ title: "Smartlook", url: "https://www.smartlook.com" },
	{ title: "STRV", url: "https://www.strv.com" },
	{ title: "Vodafone", url: "https://www.vodafone.cz" },
];

export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-inter)]">
			<main className="flex flex-col gap-3 row-start-2">
				<Image
					src="/react-native.svg"
					alt="Next.js logo"
					width={180}
					height={180}
					priority
				/>
				<h1 className="text-2xl font-bold mt-2">React Native Česko</h1>

				<p className="text-sm mt-4">
					React Native Česko je komunita nadšenců okolo frameworku React Native
					pro tvorbu multiplatformních aplikací.
				</p>

				<h2 className="text-lg font-bold mt-8">
					Které firmy v Česku používají React Native?
				</h2>
				<ul className="list-inside list-disc mt-0 text-sm">
					{companies.map((company) => (
						<li key={company.title}>
							<a
								className="hover:underline hover:underline-offset-4"
								href={company.url}
								target="_blank"
							>
								{company.title}
							</a>
						</li>
					))}
				</ul>

				<h2 className="text-lg font-bold mt-8">
					Které firmy v Česku hledají React Native vývojáře?
				</h2>
				<p className="text-sm">Mrkněte na:</p>
				<ul className="list-inside list-disc mt-0 text-sm">
					<li>
						<a
							className="hover:underline hover:underline-offset-4"
							href="https://www.startupjobs.cz/nabidky?technologie=react-native"
						>
							StartupJobs
						</a>
					</li>
					<li>
						<a
							className="hover:underline hover:underline-offset-4"
							href="https://www.jobs.cz/prace/?q=react%20native"
						>
							Jobs.cz
						</a>
					</li>
				</ul>

				<h2 className="text-lg font-bold mt-8">Nadcházející akce</h2>
				<p className="text-sm">
					Zatím není nic konkrétního v plánu, ale rádi bychom něco alespoň
					malého uspořádali.
				</p>

				<div className="flex gap-4 items-center flex-col sm:flex-row mt-8">
					<a
						className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
						href="https://docs.google.com/forms/d/e/1FAIpQLSdmLHQcPSHzyuDyeiCorXALwajD8_RdB-EJ2Ubdkd6iTwChlg/viewform?usp=header"
						target="_blank"
						rel="noopener noreferrer"
					>
						Chci vědět více
					</a>
					<a
						className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
						href="https://linkedin.com/in/janziemba"
						target="_blank"
						rel="noopener noreferrer"
					>
						Chci vás kontaktovat
					</a>
				</div>
			</main>

			<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="https://linkedin.com/in/janziemba"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						aria-hidden
						src="/linkedin.svg"
						alt="LinkedIn icon"
						width={16}
						height={16}
					/>
					Jan Ziemba
				</a>
			</footer>
		</div>
	);
}
