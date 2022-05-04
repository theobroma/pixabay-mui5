// https://stackoverflow.com/questions/67909356/is-there-any-way-to-fetch-all-the-responses-stored-in-api-slice-rtk-query
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import ImageGallery from '../../@components/ImageGallery';
import { useAppDispatch } from '../../@store/configureStore';
import { useGetPicturesQuery } from '../../@store/pictures/api';

const MainView = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  // const { data, error, isLoading, isFetching, isError }
  const currentResult = useGetPicturesQuery(page);

  // const currentResultHits = currentResult.data?.hits;
  const currentResultHits = currentResult.data?.hits;
  const total = currentResult.data?.total;
  console.log('🚀 ~ file: MainView.tsx ~ line 18 ~ MainView ~ total', total);
  const totalHits = currentResult.data?.totalHits;
  console.log(
    '🚀 ~ file: MainView.tsx ~ line 20 ~ MainView ~ totalHits',
    totalHits,
  );

  const getMorePhotos = async () => {
    //   page++;
    //   const response = await getPhotos(page);
    //   setItems(items.concat(response.data.hits));
    //   setTotalHits(response.data.totalHits);
    //   setInitialized(true);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1 }}>MainView</Box>
      <InfiniteScroll
        pageStart={page}
        loadMore={getMorePhotos}
        // hasMore={totalHits > items.length}
        // threshold={100}
      >
        <ImageGallery hits={currentResultHits} />
      </InfiniteScroll>
    </Container>
  );
};

export default MainView;
