import { Button, Grid, Typography } from "@mui/material";
import { Container, styled } from "@mui/system";
import Avatar from "../../../../assets/images/avatar.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import ContactsIcon from "@mui/icons-material/Contacts";
const Hero = () => {
  const StyledHero = styled("div")(() => ({
    backgroundColor: "black",
    height: "100vh",
  }));

  const StyledImg = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%",
  }));

  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <StyledImg src={Avatar} alt="Avatar" />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography color="primary" variant="h1" textAlign={"center"}>
              Gabriel Ferreira
            </Typography>
            <Typography color="primary" variant="h2" textAlign={"center"}>
              I'am Desenvolvedor Web
            </Typography>

            <Grid container display={"flex"} justifyContent={"center"}>
              <Grid item xs={12} md={4} display={"flex"} justifyContent={"center"}>
                <Button>
                  <DownloadIcon />
                  Download CV
                </Button>
              </Grid>
              <Grid item xs={12} md={4} display={"flex"} justifyContent={"center"}>
                <Button>
                  <ContactsIcon />
                  Contact me
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default Hero;
