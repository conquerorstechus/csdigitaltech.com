const stats = [
  {
    metric: '+250%',
    label: 'Average Follower Growth',
    subtext: 'In 3 months',
  },
  {
    metric: '45%+',
    label: 'Higher Engagement Rate',
    subtext: 'Compared to industry average',
  },
  {
    metric: '1000+',
    label: 'Accounts Transformed',
    subtext: 'Across all niches',
  },
  {
    metric: '99%',
    label: 'Follower Retention Rate',
    subtext: 'Real, engaged followers',
  },
]

export function InstagramGrowthStats() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Proven Results
          </h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            Real growth from real followers who engage with your content
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl font-bold text-[#DC2626] mb-2">{stat.metric}</div>
              <p className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</p>
              <p className="text-sm text-[#6B7280]">{stat.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
