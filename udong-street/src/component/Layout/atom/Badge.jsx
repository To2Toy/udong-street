import github from "../../asset/github.png";
import instagram from "../../asset/instagram.png";
import email from "../../asset/email.png";
import { Image } from 'react-bootstrap'
import '../index.css'
const Badge = (props) => {
  const logo =
    props.where === "github"
      ? [github, "https://www.github.com/To2Toy"]
      : props.where === "instagram"
      ? [instagram, "https://www.instagram.com/hyun_seok_c/"]
        : [email, "mailto:chs29359685@gmail.com?subject=[우동거리] 안녕하세요"];
  return (
      <Image 
        style={{
          width: 20,
        height: 20,
      margin: 5}}
        src={logo[0]} alt="..." onClick={() => window.open(logo[1], "_blank")} />
  );
};
export default Badge;
