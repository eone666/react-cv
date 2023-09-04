import { View, StyleSheet, Text, Image } from "@react-pdf/renderer";
import Link from "../components/link.tsx";
import { Github } from "../icons/github.tsx";
import Row from "../components/row.tsx";
import Phone from "../icons/phone.tsx";
import MapMarker from "../icons/map-marker.tsx";
import Email from "../icons/email.tsx";
import Linkedin from "../icons/linkedin.tsx";
import Telegram from "../icons/telegram.tsx";
import myPhoto from "../assets/my-photo.jpg";

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    padding: "20px",
    gap: "20px",
  },
  left: {
    height: "120%",
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "20px",
  },
  fullName: {
    fontSize: "26pt",
  },
  right: {
    height: "120%",
    fontSize: "12pt",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: "4px",
  },
  photo: {
    width: "100px",
    height: "100px",
    borderRadius: "100%",
  },
});

export default function Header() {
  return (
    <View style={styles.root}>
      <View style={styles.left}>
        <Image style={styles.photo} src={myPhoto} />
        <View>
          <Text style={styles.fullName}>Ivan Avdeyev</Text>
          <Text>Frontend Developer</Text>
        </View>
      </View>
      <View style={styles.right}>
        <Row itemsCenter gap="5px">
          <Link src="mailto:eone.ukg@gmail.com">eone.ukg@gmail.com</Link>
          <Email width={12} height={12} color="#000" />
        </Row>
        <Row itemsCenter gap="5px">
          <Link src="tel:+77072973793">+77072973793</Link>
          <Phone width={12} height={12} color="#000" />
        </Row>
        <Row itemsCenter gap="5px">
          <Text>Oskemen, Kazakhstan</Text>
          <MapMarker width={12} height={12} color="#000" />
        </Row>
        <Row itemsCenter gap="5px">
          <Link src="https://github.com/eone666">github.com/eone666</Link>
          <Github width={12} height={12} color="#000" />
        </Row>
        <Row itemsCenter gap="5px">
          <Link src="https://www.linkedin.com/in/eone666/">
            linkedin.com/in/eone666/
          </Link>
          <Linkedin width={12} height={12} color="#000" />
        </Row>
        <Row itemsCenter gap="5px">
          <Link src="https://t.me/eone666">@eone666</Link>
          <Telegram width={12} height={12} color="#000" />
        </Row>
      </View>
    </View>
  );
}
