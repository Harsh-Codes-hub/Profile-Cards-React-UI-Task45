const VariantOne = ({avatar, coverImage}) => {
  return (
    <article className="bg-white h-150 w-130 flex flex-col p-3">
      <header className="h-40">
        <img src={coverImage} alt="cover" className="h-full w-full object-cover object-centre"/>
      </header>
      <section className="border relative">
        <img src={avatar} alt="cover" className="h-25 aspect-square rounded-full border-4 border-(--color-white) absolute left-1/2 -translate-x-1/2 top-[-16px]"/>
      </section>
      <footer className="border">

      </footer>

    </article>
  )
}

export default VariantOne
