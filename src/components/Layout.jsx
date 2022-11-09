export const Layout = ({children}) => {
    return (
        <main className="mb-10">
            <header className="bg-gray-50 text-center py-7">
                <h1 className="font-semibold text-2xl text-gray-600">Shopping cart</h1>
            </header>
            {children}
        </main>
    )
}