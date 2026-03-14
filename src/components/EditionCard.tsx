import DividerLine from "./DividerLine";
import EditionBlock from "./EditionBlock";
import FragmentCategory from "./FragmentCategory";
import TextBlock from "./TextBlock";

const EditionCard = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-white border border-olive-300 rounded-lg p-7 gap-2">
      <FragmentCategory
        section="A. Le project de juin 1658"
        bundle="XVI. Transition de la connaissance de l'homme à Dieu"
        index="univers"
      />
      <div className="flex w-full justify-between gap-3">
        <EditionBlock edition="sellier" fragNumber={231} />
        <EditionBlock edition="BRUNSCHVICG" fragNumber={347} />
        <EditionBlock edition="lafuma" fragNumber={200} />
        <EditionBlock edition="le guern" fragNumber={186} />
      </div>
      <DividerLine />

      <TextBlock
        text="L’homme n’est qu’un roseau, le plus faible de la nature, mais c’est un
        roseau pensant. Il ne faut pas que l’univers entier s’arme pour
        l’écraser ; une vapeur, une goutte d’eau suffit pour le tuer. Mais quand
        l’univers l’écraserait, l’homme serait encore plus noble que ce qui le
        tue, puisqu’il sait qu’il meurt et l’avantage que l’univers a sur lui.
        L’univers n’en sait rien."
      />
    </div>
  );
};

export default EditionCard;
