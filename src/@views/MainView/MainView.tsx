import { Container, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import { nanoid } from '@reduxjs/toolkit';
import React, { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppCard from '../../@components/AppCard';
import AppCardSkeleton from '../../@components/AppCard/AppCardSkeleton';
import { useAppDispatch, useAppSelector } from '../../@store/configureStore';
import { ICurrency } from '../../@types';

const MainView: React.FC = () => {
  const dispatch = useAppDispatch();
  // const {
  //   data: { coins },
  //   isFetching,
  // } = useAppSelector(coinsSelector);

  // useEffect(() => {
  //   dispatch(getCoinsTC());
  // }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          MainView
        </Grid>
      </Box>
    </Container>
  );
};

export default MainView;
