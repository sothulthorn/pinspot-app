const google_api_key = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;

export const getMapPreview = (lat, lng) => {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${google_api_key}`;

  return imagePreviewUrl;
};

export const getAddress = async (lat, lng) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${google_api_key}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch address!');
  }

  const data = await response.json();

  if (data.results && data.results.length > 0) {
    const address = data.results[0].formatted_address;
    return address;
  } else {
    throw new Error('No address found for the given coordinates!');
  }
};
