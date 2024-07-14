import BookBlock from "./BookBlock";

const ThreeBooksBlock = () => {
  return (
    <div className="flex gap-[20px] flex-col md:flex-row">
      <BookBlock />
      <BookBlock isSecondary />
      <BookBlock />
    </div>
  );
};

export default ThreeBooksBlock;
