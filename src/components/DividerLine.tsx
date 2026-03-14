interface DividerLineProps {
  text?: string;
  customTextClass?: string;
  customBorderClass?: string;
}

const DEFAULT_BORDER_CLASS = "border-gray-200";
const DEFAULT_TEXT_CLASS = "text-gray-500";

const DividerLine = ({
  text,
  customTextClass,
  customBorderClass,
}: DividerLineProps) => {
  const textClass = customTextClass || DEFAULT_TEXT_CLASS;
  const borderClass = customBorderClass || DEFAULT_BORDER_CLASS;

  return (
    <div className="flex items-center w-full my-4">
      <div className={`grow border-t ${borderClass}`}></div>
      {text && (
        <span
          className={`shrink mx-7 text-lg font-medium uppercase ${textClass}`}
        >
          {text}
        </span>
      )}
      <div className={`grow border-t ${borderClass}`}></div>
    </div>
  );
};

export default DividerLine;
