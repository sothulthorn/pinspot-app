import { StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';
import PlaceList from '../components/Places/PlaceList';
import { fetchPlaces } from '../util/database';

const AllPlaces = ({ route }) => {
  const [loadedPlaces, setLoadedPlaces] = useState([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    const loadPlaces = async () => {
      try {
        const places = await fetchPlaces();
        setLoadedPlaces(places);
      } catch (error) {
        console.error('Error fetching places:', error);
      }
    };

    if (isFocused) {
      loadPlaces();
      if (route.params?.place) {
        setLoadedPlaces((curPlaces) => [...curPlaces, route.params.place]);
      }
    }
  }, [isFocused, route]);

  return <PlaceList places={loadedPlaces} />;
};

export default AllPlaces;

const styles = StyleSheet.create({});
