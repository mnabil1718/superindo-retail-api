import Image from "next/image";
import Superindo from "../../public/superindo.svg";

const AppLogo = () => {
  return <Image src={Superindo} alt="Logo Superindo" height={75} width={75} />;
};

export default AppLogo;
