import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import { emphasize, styled } from "@mui/material/styles";

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[900]
      : theme.palette.grey[500];
  return {
    backgroundColor,
    height: theme.spacing(4),
   
    color: theme.palette.grey[400],
    // (theme.palette.mode.light
    // && theme.palette.grey[100]) || (theme.palette.mode.dark
    //     && theme.palette.text.primary[800]), 
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
        color: theme.palette.grey[900],
      backgroundColor: emphasize(backgroundColor, 0.9),
    },
    "&:active": {
      boxShadow: theme.shadows[5],
      backgroundColor: emphasize(backgroundColor, 12),
    },
  };
});

export default function NavigationMenu() {
  return (
    <div className="">
      <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb component="a" href="#" className="text-slate-400 mb-2" label="Football" />
        <StyledBreadcrumb component="a" href="#" className="text-slate-400 mb-2" label="Hockey" />
        <StyledBreadcrumb component="a" href="#" className="text-slate-400 mb-2" label="Basketball" />
        <StyledBreadcrumb component="a" href="#" className="text-slate-400 mb-2" label="Tennis" />
        <StyledBreadcrumb component="a" href="#" className="text-slate-400 mb-2" label="Cricket" />
      </Breadcrumbs>
    </div>
  );
}
