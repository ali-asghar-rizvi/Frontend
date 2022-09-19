
<Container sx={{
  display: 'flex', 
  flexDirection: {xs: 'column', sm: 'row'}}}
>
  {...children}
</Container>




Breakpoints in Material Ui 
xs, extra-small: 0px
sm, small: 600px
md, medium: 900px
lg, large: 1200px
xl, extra-large: 1536px




mport Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import useMediaQuery from "@mui/material/useMediaQuery";

const responsivePaper = {
  border: "1px solid gray",
  margin: 1,
  flex: { xs: "100%", sm: "calc(50% - 20px)", md: "calc(33% - 20px)" },
  backgroundColor: { xs: "blue", sm: "red", md: "yellow" },
  fontSize: { xs: 16, md: 32 },
};

const responsiveBadge = {
  maxWidth: "max-content",
  "& .MuiBadge-badge": {
    backgroundColor: "gray",
    color: { xs: "yellow", sm: "blue" },
  },
};

const buttonStyleXs = {
  borderColor: "primary.main",
};

const buttonStyleSm = {
  borderColor: "secondary.main",
};

export default function SxBreakpoint() {
  const isXs = useMediaQuery("(max-width:600px)");

  return (
    <Stack direction="column" spacing={2} sx={{ width: "100%" }}>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <Paper sx={responsivePaper}>One</Paper>
        <Paper sx={responsivePaper}>Two</Paper>
        <Paper sx={responsivePaper}>Three</Paper>
      </Box>
      <Badge sx={responsiveBadge} badgeContent="style!">
        <Button variant="outlined" sx={{marginLeft:2}}>Lovely Button</Button>
      </Badge>
      <Button variant="outlined" sx={isXs ? buttonStyleXs: buttonStyleSm}>
        Responsive
      </Button>
    </Stack>
  );
}



