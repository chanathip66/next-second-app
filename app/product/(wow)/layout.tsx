export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <h1 className="text-2xl font-bold text-green-500 text-center mt-3 mb-3">
        Product SALE
      </h1>
      {children}
      <h3 className="text-center mt-3 mb-3">✅ สินค้าดีมีคุณภาพ 😊</h3>
    </section>
  );
}
