import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SusuBanner from "../../public/carousel/susu banner.png";
import Image from "next/image";

const Hero = () => {
  return (
    <Card className="relative mb-5 w-full overflow-hidden">
      <CardContent className="relative aspect-[3/1] w-full">
        <Image
          src={SusuBanner}
          alt="Banner susu formula"
          fill
          className="w-full h-full object-cover"
        />
      </CardContent>
    </Card>
  );
};

export default Hero;
