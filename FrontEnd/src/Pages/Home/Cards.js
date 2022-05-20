import { Card, Button, Col, Row } from "react-bootstrap";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  card: {
    border: "none",
    textAlign: "center",
  },
  cardBody: {
    borderRadius: "0 0 50% 50%",
    fontWeight: "bold",
  },
  cardImage: {
    width: "10%",
    borderRadius: "10%",
  },
  col: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: 30,
    color: "#247881",
  },
  row: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: 30,
  },
  btnCv: {
    width: 120,
    marginRight: 10,
  },
  btnGithub: {
    width: 120,
  },
});

const Cards = () => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.card}>
        <Card.Body className={classes.cardBody}>
          <Card.Img
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            variant="top"
            className={classes.cardImage}
            src="https://aphki.or.id//post/avatar.png"
          />
          <Card.Title
            style={{ color: "#247881" }}
            data-aos="flip-left"
            data-aos-delay="100"
            data-aos-anchor=".example-selector"
          >
            Hasiholan Owen Ambarita
          </Card.Title>
          <Col
            className={classes.col}
            lg={6}
            data-aos="flip-left"
            data-aos-delay="100"
            data-aos-anchor=".example-selector"
          >
            Motivasi untuk menuangkan ide dalam sebuah aplikasi
            menjadikan saya semangat untuk belajar dunia IT.
            Semoga saya dapat berguna bagi masyarakat
            dalam bidang IT.
          </Col>

          <Row className={classes.row}>
            <Button
              onClick={() =>
                window.open(
                  "https://bit.ly/CV-Hasiholan-Owen-Ambarita",
                  "_blank" // <- This is what makes it open in a new window.
                )
              }
              data-aos="fade-right"
              data-aos-anchor-placement="right-center"
              variant="outline-primary"
              className={classes.btnCv}
            >
              CV
            </Button>{" "}
            <Button
              onClick={() =>
                window.open(
                  "https://github.com/blackhole2708",
                  "_blank" // <- This is what makes it open in a new window.
                )
              }
              data-aos="fade-left"
              data-aos-anchor-placement="left-center"
              variant="outline-secondary"
              className={classes.btnGithub}
            >
              Github
            </Button>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};
export default Cards;
