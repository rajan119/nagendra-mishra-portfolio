// components/Books.tsx
import Image from 'next/image';

type Book = {
  title: string;
  subtitle: string;
  year: string;
  category: string;
  image: string;
};

const BOOKS: Book[] = [
  {
    title: "Time Management Mastery",
    subtitle: "Strategies for High-Performance Entrepreneurs",
    year: "2024",
    category: "Productivity",
    image: "/images/books/time-management-mastery.jpg",
  },
  {
    title: "The Entrepreneur's Journey",
    subtitle: "From Coffee Shop to Corporate Boardroom",
    year: "2023",
    category: "Autobiography",
    image: "/images/books/entrepreneurs-journey.jpg",
  },
  {
    title: "Sales Psychology",
    subtitle: "Understanding the Mind of Your Customer",
    year: "2022",
    category: "Sales",
    image: "/images/books/sales-psychology.jpg",
  },
  {
    title: "Building Resilience",
    subtitle: "Thriving Through Business Challenges",
    year: "2021",
    category: "Mindset",
    image: "/images/books/building-resilience.jpg",
  },
  {
    title: "The Mediator's Playbook",
    subtitle: "Resolving Disputes Through Strategic Negotiation",
    year: "2025",
    category: "Legal Practice",
    image: "/images/books/mediators-playbook.jpg",
  },
  {
    title: "Corporate Leadership",
    subtitle: "Leading with Vision & Integrity",
    year: "2024",
    category: "Leadership",
    image: "/images/books/corporate-leadership.jpg",
  },
];

export default function Books() {
  return (
    <section id="books" className="bg-white py-20 text-black sm:py-24">
      <div className="mx-auto max-w-[1080px] px-5 sm:px-8">
        <div className="mb-12 max-w-[620px]">
          <span className="mb-3.5 block font-mono text-xs uppercase tracking-[0.14em] text-red-600">
            Authorship
          </span>
          <h2 className="font-display text-[28px] leading-[1.15] text-black sm:text-[38px]">
            Published works & insights
          </h2>
          <p className="mt-4 text-[15.5px] text-black/60">
            Author of multiple books on time management, entrepreneurship,
            sales psychology, and corporate leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BOOKS.map((book) => (
            <div
              key={book.title}
              className="group overflow-hidden border border-black/10 bg-black/5 transition-all duration-300 hover:border-red-600 hover:bg-black/10"
            >
              <div className="relative h-48 w-full overflow-hidden bg-black/20">
                <Image
                  src={book.image}
                  alt={book.title}
                  width={400}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-red-600">
                    {book.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-[18px] leading-tight text-black">
                  {book.title}
                </h3>
                <p className="mt-1.5 text-[13px] text-black/60">
                  {book.subtitle}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-red-600">
                    {book.year}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-black/40">
                    Read More →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}