import React, { useState, useEffect, useContext } from 'react';
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import { Box } from '@mui/system';
import { createApi, } from 'unsplash-js';
import { Context } from '../Navbar/Context';
import Modal from '@mui/material/Modal';



function ListOfImages(props) {
  const unsplash = createApi({ accessKey: 'zwvfNbBe_Z5xfIt0nJXXX5B7m1RupBKuT5gSHlAksy0' });
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useContext(Context);
  const defaultQuery = 'Pretty Girl';

  console.log(query);

  // Modal stuffs

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'transparent',
  };

  const [open, setOpen] = useState(false);
  const handleOpen = (src) => {
    setOpen(true)
  }


  const handleClose = () => setOpen(false);
  const [modalData, setModalData] = useState(null);
  //

  useEffect(() => {
    unsplash.search.getPhotos({
      query: query || defaultQuery,
      page: 1,
      perPage: 20,

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

    <Box sx={{ width: '100%', height: '50%', overflowY: 'hidden', background: 'black'}}>
      <ImageList variant="masonry" cols={5} gap={5} >
        {photos.map((item) => (
          <ImageListItem key={item.id} >
            <img
              src={`${item.urls.regular}?w=248&fit=crop&auto=format`}
              srcSet={`${item.urls.regular}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.alt_description}
              loading="fast"
              onClick={()=> {
                setModalData(item.urls.regular);
                handleOpen(true);
              }} 
            />
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <ImageListItem sx={style} key={modalData}>
                <img
                  src={modalData}
                  alt={modalData}
                />
              </ImageListItem>
            </Modal>
            <ImageListItemBar
              title={item.description}
              subtitle={` Author: ${item.user.name}`}
            />

          </ImageListItem>
        ))}
      </ImageList>
    </Box>

  )

}

export default ListOfImages;
