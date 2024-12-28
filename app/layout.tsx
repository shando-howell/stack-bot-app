import "./global.css"

export const metadata = {
    title: "Stack Bot",
    description: "An AI assistant for JavaScript/TypeScript Developers"
}

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}

export default RootLayout;