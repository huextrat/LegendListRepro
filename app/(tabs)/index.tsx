import { StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { LegendList } from '@legendapp/list';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

const data = Array.from({ length: 200 }, (_, index) => {
  // Create different height patterns for images
  const baseHeight = 200;
  let height;
  
  if (index % 15 === 0) {
    height = baseHeight * 3; // Tall images
  } else if (index % 7 === 0) {
    height = baseHeight * 1.5; // Medium-tall images
  } else if (index % 3 === 0) {
    height = baseHeight * 0.8; // Shorter images
  } else {
    height = baseHeight; // Standard height
  }

  return {
    id: index,
    height: Math.round(height),
    imageUrl: `https://picsum.photos/${Math.round(Dimensions.get('window').width)}/${Math.round(height)}?random=${index}`,
  };
});

export default function HomeScreen() {

  const [visibleIndexes, setVisibleIndexes] = useState<number[]>(data.map(d => d.id));


  const renderItem = ({ item }: { item: { id: number, height: number, imageUrl: string } }) => {

    if (!visibleIndexes.includes(item.id)) {
      return null;
    }

    return (
      <TouchableOpacity style={{ padding: 8 }} onPress={() => {
        setVisibleIndexes(visibleIndexes.filter(d => d !== item.id));
      }}>
        <Image
          source={{ uri: item.imageUrl }}
          style={{
            flex: 1,
            aspectRatio: 1.7,
          }}
        />
        <Text style={styles.imageText}>{`${item.id} (${item.height})`}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LegendList
        data={data}
        extraData={visibleIndexes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  video: {
    aspectRatio: 1.7,
  },
  imageText: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 4,
    borderRadius: 4,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});