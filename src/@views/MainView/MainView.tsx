import { Container, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../@store/configureStore';
import { useGetPicturesQuery } from '../../@store/pictures/api';
import { HitsEntityType } from '../../@types';

const MainView = () => {
  const dispatch = useAppDispatch();

  const [noMoreResults, setNoMoreResults] = useState(false);
  const [page, setPage] = useState(1);
  const [hits, setHits] = useState<HitsEntityType[]>([]);

  const { data, error, isLoading, isFetching, isError } = useGetPicturesQuery(
    page,
    {
      skip: noMoreResults,
    },
  );

  useEffect(() => {
    console.log(data);
  }, [data]);

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
