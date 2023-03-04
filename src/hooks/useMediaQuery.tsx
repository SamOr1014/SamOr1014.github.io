import { useMediaQuery, useTheme } from "@mui/material";

export const useWebMediaQuery = () => {
  const themeHelper = useTheme();
  const smallerThanXSMediaBreakPoint = useMediaQuery(
    themeHelper.breakpoints.down("xs")
  );
  const smallerThanSMMediaBreakPoint = useMediaQuery(
    themeHelper.breakpoints.down("sm")
  );
  const smallerThanMDMediaBreakPoint = useMediaQuery(
    themeHelper.breakpoints.down("md")
  );
  const smallerThanLGMediaBreakPoint = useMediaQuery(
    themeHelper.breakpoints.down("lg")
  );
  const smallerThanXLMediaBreakPoint = useMediaQuery(
    themeHelper.breakpoints.down("xl")
  );
  return {
    smallerThanXSMediaBreakPoint,
    smallerThanSMMediaBreakPoint,
    smallerThanMDMediaBreakPoint,
    smallerThanLGMediaBreakPoint,
    smallerThanXLMediaBreakPoint,
  };
};
