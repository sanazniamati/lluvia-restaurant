import { Container } from "postcss";
import Background from "../../assets/images/header-background.jpg";

const headerStyle = {
  backgroundImage: `url(${Background})`,
};

function Header() {
  return (
    <header
      className="h-[200px] py-5 bg-cover bg-no-repeat bg-center tracking-widest"
      style={headerStyle}
    >
      <div className=" container">
        <h1 className=" text-start text-light uppercase  font-extrabold text-2xl">
          فست فود زن عامو
        </h1>
      </div>
    </header>
  );
}

export default Header;
