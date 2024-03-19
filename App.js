import React from 'react';
import {StyleSheet, Text, SafeAreaView, StatusBar, Platform, View, FlatList, ScrollView} from 'react-native';
import ShopProductPreview from './src/components/layout/products/ShopProductPreview';
import ShopProductPreviewList from './src/components/layout/products/ShopProductPreviewList'

const product =    {
  image: "https://picsum.photos/197",
  title: "Telefon sotiladi Nomi Redmi note 12 GlobalHotira 4+4/128",
  price: {
    currency: "uzs",
    originalPrice: 12000,
    salePrice: 10000,
  },
  rating: 4.3,
}

const renderShopProductItem = ()=>{
  return (
    <ShopProductPreview product={product} variant="variant2" showLike={true} />
  )
}
const App = () => {
  return (
      <SafeAreaView style={styles.container}>
        <ScrollView StickyHeaderComponent={<Text>hello</Text>}>
        <Text  style={styles.text}>Page content</Text>
        <ShopProductPreviewList iterate={8} variant="variant2" showLike={false}/>

        </ScrollView>
          </SafeAreaView>
  );
};

console.log(StatusBar.currentHeight)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight
      }
    })
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
    fontFamily: 'Roboto-Regular',
  },
});

export default App;