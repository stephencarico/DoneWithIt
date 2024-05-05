import client from './client';

const endpoint = '/listings'

const getListings = () => client.get(endpoint);

const addListing = (listing) => {
  const data = new FormData();

  const listingKeysArr = Object.keys(listing);
  listingKeysArr.forEach((key) => {
    switch (key) {
      case 'images':
        listing['images'].forEach((image) => {
          const name = image.split('\\').pop().split('/').pop();
          data.append('images', {
            name,
            type: 'image/jpeg',
            uri: image
          })
        });
        break;
      case 'category':
        data.append('categoryId', listing['category'].value);
        break;
      case 'location':
        data.append('location', JSON.stringify(listing['location']));
        break;
      default:
        data.append(key, listing[key]);
    }
  });

  const config = {
    // apisauce no longer automatically sets the Content-Type
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    onUploadProgress: eventProgress => console.log(eventProgress.loaded)
  }

  return client.post(endpoint, data, config);
}

export default {
  getListings,
  addListing
}