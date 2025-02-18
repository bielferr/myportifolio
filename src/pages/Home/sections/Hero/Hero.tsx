import { Grid } from "@mui/material";
import { styled } from "@mui/system";
import Avatar from "../../../../assets/images/avatar.jpg";

const Hero = () => {
  const StyledHero = styled("div")(() => ({
    backgroundColor: "black",
    padding: "20px",
    textAlign: "center",
  }));

  const StyledImg = styled("img")(() => ({
    width: "30%",
    borderRadius: "50%",
  }));

  return (
    <StyledHero>
      <Grid container spacing={2}>
        <Grid item xs={4}></Grid>
        <Grid item xs={8}></Grid>
      </Grid>
      <StyledImg src={Avatar} alt="Avatar" />
    </StyledHero>
  );
};

export default Hero;
