export default function Title({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="mt-10 mb-6 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors">
            {children}
        </h2>
    )
}