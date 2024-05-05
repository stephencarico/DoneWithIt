import client from './client';

const endpoint = '/listings'

const getListings = () => client.get(endpoint);

const addListing = (listing) => {
  const data = new FormData();

  data.append('title', listing.title);
  data.append('price', listing.price);
  data.append('categoryId', listing.category.value);
  data.append('description', listing.description);
  listing.images.forEach((image) => {
    const name = image.split('\\').pop().split('/').pop();
    data.append('images', {
      name,
      type: 'image/jpeg',
      uri: image
    })
  });
  if (listing.location)
    data.append('location', JSON.stringify(listing.location));

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
  addListing,
  getListings,
}