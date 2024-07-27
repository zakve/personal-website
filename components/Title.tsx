export default function Title({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="mt-14 mb-8 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors underline decoration-4 decoration-blue-600 underline-offset-8">
            {children}
        </h2>
    )
}