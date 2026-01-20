import Header from "@/components/header";
import Footer from "@/components/footer";
import BookCard from "@/components/book-card";

function App() {
  const books = [
    { title: "React for Dummies", year: 2026, isRead: true },
    { title: "Soup", year: 2024, isRead: false },
    { title: "How to Be Productive Tomorrow", year: 2020, isRead: true },
  ];
  return (
    <main className="flex min-h-svh flex-col pt-20">
      <Header title={"My booklist"} />
      {books.length > 0 ? (
        <ul className="flex flex-wrap justify-center gap-10">
          {books.map((book, index) => (
            <BookCard
              key={index}
              title={book.title}
              year={book.year}
              isRead={book.isRead}
            />
          ))}
        </ul>
      ) : (
        <p className="text-center font-bold">The booklist is a lie.</p>
      )}
      <Footer />
    </main>
  );
}

export default App;
