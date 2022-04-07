// https://stackoverflow.com/questions/67909356/is-there-any-way-to-fetch-all-the-responses-stored-in-api-slice-rtk-query
import { Container, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useEffect, useState, useMemo } from 'react';
import ImageGallery from '../../@components/ImageGallery';
import { useAppDispatch, useAppSelector } from '../../@store/configureStore';
import { useGetPicturesQuery } from '../../@store/pictures/api';
import { HitsEntityType } from '../../@types';

const MainView = () => {
  const dispatch = useAppDispatch();

  // const [noMoreResults, setNoMoreResults] = useState(false);
  const [page, setPage] = useState(2);
  // const [hits, setHits] = useState<HitsEntityType[]>([]);

  // const { data, error, isLoading, isFetching, isError }

  const lastResult = useGetPicturesQuery(page - 1, {
    skip: page === 1,
  });

  const currentResult = useGetPicturesQuery(page);
  const nextResult = useGetPicturesQuery(page + 1);

  // const pageSize = 12;
  // const combined = useMemo(() => {
  //   const arr = new Array(pageSize * (page + 1));
  //   for (const data of [lastResult.data, currentResult.data, nextResult.data]) {
  //     if (data) {
  //       arr.splice(data.offset, data.items.length, ...data.items);
  //     }
  //   }
  //   return arr;
  // }, [pageSize, page, lastResult.data, currentResult.data, nextResult.data]);

  const lastResultHits = lastResult.data?.hits;
  const currentResultHits = currentResult.data?.hits;
  const nextResultHits = nextResult.data?.hits;

  // console.log('lastResultHits', lastResultHits);
  // console.log('currentResultHits', currentResultHits);
  // console.log('nextResultHits', nextResultHits);

  // const combined = [].concat(lastResultHits, currentResultHits, nextResultHits);

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  // const {
  //   data: { coins },
  //   isFetching,
  // } = useAppSelector(coinsSelector);

  // useEffect(() => {
  //   dispatch(getCoinsTC());
  // }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1 }}>MainView</Box>
      <ImageGallery hits={nextResultHits} />
    </Container>
  );
};

export default MainView;
