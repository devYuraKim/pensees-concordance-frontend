interface IndexPillProps {
  index: string;
}

const IndexPill = ({ index }: IndexPillProps) => {
  return (
    <div className="bg-olive-200 px-2 py-1 rounded-lg leading-none text-base uppercase">
      {index}
    </div>
  );
};

export default IndexPill;
