import { styled } from "@mui/material";
import theme from "../../theme";

interface StyledButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}
const StyledButton:React.FC<StyledButtonProps> = ({children,  onClick}) => {

  const StyledButton = styled ("button")(() => ({
    backgroundColor:"transparent",
    border: ` 1pxsolid ${theme.palette.primary.contrastText}`,
    borderRadius: "3px",
    padding: "5px 15px",
    width: "100%",
    color: theme.palette.primary.contrastText,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,

    }
  }));

  return (
    <>  
      <StyledButton onClick={onClick}>
        {children}
      </StyledButton>
    
    </>
  )

}


export default StyledButton 
