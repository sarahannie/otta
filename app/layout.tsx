import "@/styles/globals.css";
import NavBar from "@/components/layout/navbar";
import Footer from "@/components/footer";


export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body>
				<NavBar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
