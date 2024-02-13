import "@/styles/globals.css";
import NavBar from "@/components/layout/navbar";


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
			</body>
		</html>
	);
}
