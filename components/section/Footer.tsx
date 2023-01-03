// react
import * as React from 'react';
// @mui
import {
  Box,
  BoxProps,
  Card,
  CardProps,
  CardContent,
  CardContentProps,
  Typography,
  styled,
} from '@mui/material';
// custom component
import FacebookIconLink from '../common/FacebookIconLink';
import InstagramIconLink from '../common/InstagramIconLink';
import TwitterIconLink from '../common/TwitterIconLink';
// custom context
import ConstantsContext from '../../context/constantsContext';
// type
interface FooterProps {}

const CustomCard = styled(Card)<CardProps>(({ theme }) => ({
  margin: '1rem',
  padding: '1rem',
  [theme.breakpoints.up('sm')]: {
    margin: '2rem',
    padding: '2rem',
  },
}));

const CustomCardContent = styled(CardContent)<CardContentProps>(
  ({ theme }) => ({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0.5rem',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    },
    a: {
      marginBottom: '1rem',
      [theme.breakpoints.up('sm')]: {
        marginBottom: 0,
        marginLeft: '0.5rem',
        marginRight: '0.5rem',
      },
    },
  })
);

const Footer: React.FunctionComponent<FooterProps> = (props) => {
  const { navLinks } = React.useContext(ConstantsContext);
  navLinks?.sort((a, b) => (a.order > b.order ? 1 : -1));

  return (
    <>
      <CustomCard>
        <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
          <FacebookIconLink />
          <InstagramIconLink />
          {/* <TwitterIconLink /> */}
        </CardContent>
      </CustomCard>
    </>
  );
};

export default Footer;
