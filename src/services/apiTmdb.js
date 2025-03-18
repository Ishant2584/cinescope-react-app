import axios from 'axios';
import { endpoints, secrets } from '../utils/constants';

export async function getSearchData(queryString, controllerRef) {
  if (controllerRef.current) {
    controllerRef.current.abort();
  }
  controllerRef.current = new AbortController();
  const signal = controllerRef.current.signal;
  const options = {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${secrets.tmdbToken}`,
    },
    signal,
  };

  try {
    const response = await axios.get(
      `${endpoints.tmdbApiUrl}/search/multi?query=${queryString}&include_adult=false&language=en-US&page=1`,
      options
    );
    return response.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      //   console.log('Request canceled', error.message);
    }
    // console.log(error);
  }
}

export async function getTrending(mediaType) {
  const options = {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${secrets.tmdbToken}`,
    },
  };

  try {
    const response = await axios.get(
      `${endpoints.tmdbApiUrl}/trending/${mediaType}/day?language=en-US`,
      options
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getDetailsById(mediaType, mediaId, contentType) {
  const options = {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${secrets.tmdbToken}`,
    },
  };

  try {
    const response = await axios.get(
      `${endpoints.tmdbApiUrl}/${mediaType}/${mediaId}${contentType}`,
      options
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getGenere(type) {
  const options = {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${secrets.tmdbToken}`,
    },
  };

  try {
    const response = await axios.get(
      `${endpoints.tmdbApiUrl}/genre/${type}/list?language=en`,
      options
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getLocation() {
  const options = {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${secrets.ipInfoToken}`,
    },
  };

  try {
    const response = await axios.get(`${endpoints.ipInfoUrl}`, options);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
