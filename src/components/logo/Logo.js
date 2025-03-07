import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Link } from '@mui/material';

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {
  const theme = useTheme();

  const PRIMARY_LIGHT = theme.palette.primary.light;

  const PRIMARY_MAIN = theme.palette.primary.main;

  const PRIMARY_DARK = theme.palette.primary.dark;

  // OR using local (public folder)
  // -------------------------------------------------------
  // const logo = (
  //   <Box
  //     component="img"
  //     src="/logo/logo_single.svg" => your path
  //     sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}
  //   />
  // );

  const logo = (
    <Box
      ref={ref}
      component="div"
      sx={{
        width: 40,
        height: 40,
        display: 'inline-flex',
        ...sx,
      }}
      {...other}
    >
      <svg width="40px" height="40px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient x1="100%" y1="41.9929386%" x2="-3.23427242e-12%" y2="41.9929386%" id="linearGradient-1">
            <stop stopColor="#3773FF" offset="0%" />
            <stop stopColor="#0EF3BB" offset="100%" />
          </linearGradient>
        </defs>
        <g id="logo设计" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="编组-14" fill="url(#linearGradient-1)" transform="translate(0.000000, 0.000000)">
            <g id="编组-3" transform="translate(0.342551, 0.400855)">
              <path
                d="M18.8815396,4.21392929 C22.0750117,4.21392929 24.6576159,6.74270148 24.6576159,9.85442058 L24.6576159,18.8239019 C24.6576159,22.06453 21.9682729,24.6978095 18.6431409,24.6978095 C18.0929318,24.6978095 17.5487564,24.6241134 17.0250583,24.4812397 C18.2942832,23.0106197 19.0583583,21.1219418 19.0583583,19.0573183 L19.0583583,13.602492 C19.0583583,12.8132175 18.4141787,12.1733841 17.6195429,12.1733841 C16.8249071,12.1733841 16.1807275,12.8132175 16.1807275,13.602492 L16.1807275,19.0573183 C16.1807275,20.8058152 15.3365705,22.3750893 14.0079685,23.4117541 C13.677869,23.4896804 13.3757245,23.684068 13.1669375,23.9809977 L13.1961079,23.9450425 C12.3208611,24.4235112 11.3041724,24.6978095 10.2174252,24.6978095 C6.91164129,24.6978095 4.25412295,22.1596724 4.25412295,19.0573183 L4.25412295,10.087837 C4.25412295,6.85657381 7.02107109,4.21392929 10.4618341,4.21392929 C11.0526317,4.21392929 11.6365024,4.29371904 12.1967389,4.44808541 C10.9601101,5.91697435 10.2174252,7.80003912 10.2174252,9.85442058 L10.2174252,15.3092468 C10.2174252,16.0985213 10.8639346,16.7383547 11.6614443,16.7383547 C12.458954,16.7383547 13.1054634,16.0985213 13.1054634,15.3092468 L13.1054634,9.85442058 C13.1054634,6.74270148 15.6880675,4.21392929 18.8815396,4.21392929 Z"
                id="形状结合"
                transform="translate(14.455869, 14.455869) rotate(45.000000) translate(-14.455869, -14.455869) "
              />
            </g>
          </g>
        </g>
      </svg>
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return (
    <Link to="/" component={RouterLink} sx={{ display: 'contents' }}>
      {logo}
    </Link>
  );
});

Logo.propTypes = {
  sx: PropTypes.object,
  disabledLink: PropTypes.bool,
};

export default Logo;
