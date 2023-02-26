import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center py-2">
			<Head>
				<title>Dreamer V3 Javascript Inference</title>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
			</Head>

			<main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
				<h1 className="text-6xl font-bold animate-appearOnScroll">
					Welcome to{" "}
					<a
						className="text-blue-600"
						href="https://github.com/lipj01/dreamerv3js"
					>
						Dreamer V3 Javascript Inference
					</a>
				</h1>
			</main>

			<footer className="flex h-24 w-full items-center justify-center border-t">
				<a
					className="flex items-center justify-center gap-2"
					href="https://github.com/lipj01"
					target="_blank"
					rel="noopener noreferrer"
				>
					Made by @Lipj01{" "}
					<Image
						src="/lipj01.svg"
						alt="Github Profile"
						className="rounded-full"
						width={72}
						height={16}
					/>
				</a>
				<div className="px-10">
					<span> | </span>
				</div>
				<a
					className="flex items-center justify-center gap-2"
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{" "}
					<Image
						src="/vercel.svg"
						alt="Vercel Logo"
						width={72}
						height={16}
					/>
				</a>
			</footer>
		</div>
	);
};

export default Home;
