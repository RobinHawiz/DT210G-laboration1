type Props = {
  title: string;
  year: number;
  isRead: boolean;
};

function BookCard({ title, year, isRead }: Props) {
  return (
    <li className="w-full max-w-50 rounded-lg border border-solid border-gray-500 p-2">
      <article>
        <h2 className="mb-2 text-center font-bold">{title}</h2>
        <p>Year: {year}</p>
        <p>Read: {isRead ? "Yes" : "No"}</p>
      </article>
    </li>
  );
}

export default BookCard;
