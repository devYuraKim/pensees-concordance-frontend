interface TextBlockProps {
  text: string;
}

const TextBlock = ({ text }: TextBlockProps) => {
  return (
    <div className="flex flex-col w-full px-2 gap-2">
      <div className="text-lg">TEXT</div>
      <div className="text-lg">{text}</div>
    </div>
  );
};

export default TextBlock;
