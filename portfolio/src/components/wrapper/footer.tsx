// TODO: add a this site was made with... text?

export const Footer = () => {
  return (
    <div className="flex flex-col text-center font-light items-center gap-[0.3rem] h-[15rem] justify-center text-sm bg-cream">
      <p>Designed & built by Karita</p>

      {/* TODO: hide on projects page */}
      <div className="italic flex gap-[0.2rem] text-sm">
        About me icon made by
        <a
          href="https://www.flaticon.com/authors/bomsymbols"
          title="BomSymbols"
          className="text-accent"
          target="_blank"
        >
          BomSymbols
        </a>
        from
        <a
          href="https://www.flaticon.com/"
          title="Flaticon"
          className="text-accent"
          target="_blank"
        >
          www.flaticon.com
        </a>
      </div>
    </div>
  );
};
