import React, { useState, useEffect, useContext } from 'react';
import { ImageList, ImageListItem } from '@mui/material';
import Box from '@mui/material/Box';
import { createApi } from 'unsplash-js';
import {Context} from '../Navbar/Context';





function ListOfImages(props) {
  const unsplash = createApi({ accessKey: 'zwvfNbBe_Z5xfIt0nJXXX5B7m1RupBKuT5gSHlAksy0' });
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useContext(Context);
  const defaultQuery = 'Pretty Lady';

  console.log(query);

  useEffect(() => {
  unsplash.search.getPhotos({
    query: query || defaultQuery,
    page: 1,
    perPage: 15,

  }).then(result => {
    if (result.errors) {
      // handle error here
      console.log('error occurred: ', result.errors[0]);
    } else {
      setPhotos(result.response.results);
    }
  })
}, [query]);




  return (

    <Box sx={{ width: '40%', height: '50%', overflowY: 'hidden' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {photos.map((item) => (
          <ImageListItem key={item.id}>
            <img
              src={`${item.urls.regular}?w=248&fit=crop&auto=format`}
              alt={item.alt_description}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>

  )

}

export default ListOfImages;
