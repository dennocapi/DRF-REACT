import React from 'react';
import { styled } from '@mui/system';
import { AppBar, Toolbar, Typography, CssBaseline } from '@mui/material';

const CustomAppBar = styled(AppBar)`
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
`;

const LogoTypography = styled(Typography)`
  font-weight: bold;
  margin-left: 10px;
`;

function Header() {
  return (
    <React.Fragment>
      <CssBaseline />
      <CustomAppBar position="static" color="default" elevation={0}>
        <Toolbar>
          <LogoTypography variant="h6" color="inherit" noWrap>
            Blogmeup
          </LogoTypography>
        </Toolbar>
      </CustomAppBar>
    </React.Fragment>
  );
}

export default Header;
