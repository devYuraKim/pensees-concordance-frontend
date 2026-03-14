import IndexPill from "./IndexPill";

interface FragmentCategoryProps {
  section: string;
  bundle: string;
  index?: string;
}

const FragmentCategory = ({
  section,
  bundle,
  index,
}: FragmentCategoryProps) => {
  return (
    <div className="w-full px-1 pb-3 font-medium text-lg flex justify-between align-center">
      <div>
        <div>{section}</div>
        <div>{bundle}</div>
      </div>
      <div className="w-[30%] flex flex-wrap items-center justify-end gap-1.5 gap-x-2">
        {index && <IndexPill index={index} />}
      </div>
    </div>
  );
};

export default FragmentCategory;
