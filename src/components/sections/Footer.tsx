export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-primary-foreground/20 px-6 py-7 text-sm text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <p>
          © {new Date().getFullYear()} Pedro Leal
        </p>

        <p>
          Projetado e desenvolvido por Pedro Leal.
        </p>
      </div>
    </footer>
  );
}