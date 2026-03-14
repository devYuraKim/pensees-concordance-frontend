interface EditionBlockProps {
  edition: string;
  fragNumber: number;
  fragSuffix?: string;
}

const EditionBlock = ({
  edition,
  fragNumber,
  fragSuffix,
}: EditionBlockProps) => {
  return (
    <div className="flex flex-col p-5 rounded-lg bg-olive-100 items-center min-w-45 gap-2">
      <div className="mt-2 uppercase">{edition}</div>
      <div className="flex flex-col items-center justify-center h-20">
        <div className="text-3xl font-semibold">{fragNumber}</div>
        {fragSuffix && (
          <div className="text-lg -mt-1 lowercase">{fragSuffix}</div>
        )}
      </div>
    </div>
  );
};

export default EditionBlock;
