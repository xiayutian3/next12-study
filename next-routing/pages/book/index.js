import Link from "next/link";

const Book = ({ bookId = 100 }) => {
  return (
    <>
      <Link href="/">回到首页</Link>
      <ul>
        <li>
          <Link href="/book/5" replace>书籍5</Link>
        </li>
        <li>
          <Link href="/book/6">书籍6</Link>
        </li>
        <li>
          <Link href="/book/7">书籍7</Link>
        </li>
        <li>
          <Link href={`/book/${bookId}`}>书籍{bookId}</Link>
        </li>
      </ul>
    </>
  );
};
export default Book;
