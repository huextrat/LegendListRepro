import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { LegendList } from '@legendapp/list';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

const data = [
  // First 5 items of Type A
  { id: 1, type: 'typeA', title: 'Item A1', description: 'Description for A1' },
  { id: 2, type: 'typeA', title: 'Item A2', description: 'Description for A2' },
  { id: 3, type: 'typeA', title: 'Item A3', description: 'Description for A3' },
  { id: 4, type: 'typeA', title: 'Item A4', description: 'Description for A4' },
  { id: 5, type: 'typeA', title: 'Item A5', description: 'Description for A5' },
  
  // 1 item of Type B
  { id: 6, type: 'typeB', title: 'Item B1', description: 'Description for B1' },
  
  // 10 more items of Type A
  { id: 7, type: 'typeA', title: 'Item A6', description: 'Description for A6' },
  { id: 8, type: 'typeA', title: 'Item A7', description: 'Description for A7' },
  { id: 9, type: 'typeA', title: 'Item A8', description: 'Description for A8' },
  { id: 10, type: 'typeA', title: 'Item A9', description: 'Description for A9' },
  { id: 11, type: 'typeA', title: 'Item A10', description: 'Description for A10' },
  { id: 12, type: 'typeA', title: 'Item A11', description: 'Description for A11' },
  { id: 13, type: 'typeA', title: 'Item A12', description: 'Description for A12' },
  { id: 14, type: 'typeA', title: 'Item A13', description: 'Description for A13' },
  { id: 15, type: 'typeA', title: 'Item A14', description: 'Description for A14' },
  { id: 16, type: 'typeA', title: 'Item A15', description: 'Description for A15' },
];


export default function HomeScreen() {
  const renderItem = ({ item }: { item: any }) => {
    return item.type === 'typeA' ? <ItemA item={item} /> : <ItemB item={item} />;
  };

  return (
    <SafeAreaView>
      <LegendList
        data={data}
        renderItem={renderItem}
        estimatedItemSize={16}
      />
    </SafeAreaView>
  );
}

const ItemA = ({ item }: { item: any }) => {
  return (
    <View>
      <Text>{item.title}</Text>
    </View>
  );
};

const ItemB = ({ item }: { item: any }) => {

  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  if (!isVisible) return null;

  return (
    <TouchableOpacity onPress={toggleVisibility}>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
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
