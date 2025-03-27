export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Page Title Area Start */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h1>
            <p className="text-gray-600">
              Alumni Needs enables you to harness the power of your alumni network. Whatever may be the need
            </p>
          </div>
        </div>
      </section>
      {/* Page Title Area End */}

      {children}
    </>
  )
}