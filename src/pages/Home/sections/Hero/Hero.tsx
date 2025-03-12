import { Grid, Typography } from "@mui/material";
import { Box, Container, styled } from "@mui/system";
import Avatar from "../../../../assets/images/avatar.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import ContactsIcon from "@mui/icons-material/Contacts";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import theme from "../../../../theme";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("xs")] :{ //<= mobile
        paddingTop: "100px"
    },

    [theme.breakpoints.up("md")] :{ // >= mobile
       paddingTop: "0"
    }
  }));

  const StyledImg = styled("img")(() => ({
    width: "70%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText} `,
  }));

  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <Box position={"relative"}>
              <Box position={"absolute"} width={"200%"} top={-100} right={0}>
                <AnimatedBackground/>
              </Box>
              <Box position={"relative"} textAlign={"center"}>
              <StyledImg/>
              </Box>
            </Box>
            <StyledImg src={Avatar} alt="Avatar" />
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography
              color="primary.contrastText"
              variant="h1"
              textAlign={"center"}
              pb={2}
            >
              Gabriel Ferreira
            </Typography>
            <Typography
              color="primary.contrastText"
              variant="h2"
              textAlign={"center"}
            >
              I'am Desenvolvedor Web
            </Typography>

            <Grid
              container
              display={"flex"}
              justifyContent={"center"}
              spacing={3}
              pt={3}
            >
              <Grid
                item
                xs={12}
                md={4}
                display={"flex"}
                justifyContent={"center"}
                pt={3}
              >
                <StyledButton>
                  <DownloadIcon />
                  <Typography>Download CV</Typography>
                </StyledButton>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                display={"flex"}
                justifyContent={"center"}
                pt={3}
              >
                <StyledButton>
                  <ContactsIcon />
                  <Typography>Contact me</Typography>
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default Hero;
