import bannerUrl from "@/assets/banner.jpg";

type Props = {
  title: string;
};

function Header({ title }: Props) {
  return (
    <header className="mb-10">
      <h1 className="mb-10 text-center text-4xl">{title}</h1>
      <img className="h-70 w-full object-cover" src={bannerUrl} alt="" />
    </header>
  );
}

export default Header;
