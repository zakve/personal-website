export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-center mb-6">
      <h2
        className={
          "mt-10 mb-3 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors"
        }
      >
        {children}
      </h2>
      <div className="w-10 m-auto h-1 bg-blue-900"></div>
    </div>
  );
}
