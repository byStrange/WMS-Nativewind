import React from "react";
import { FlatList } from "react-native";
import { product } from "../../../dummyData";
import ShopProductPreview from "./ShopProductPreview";

const ShopProductPreviewList = ({ iterate, variant, showLike }) => {
  return (
    <FlatList
      data={Array.from({ length: iterate }, (_, i) => i + 1)}
      keyExtractor={(item) => item}
      numColumns={2}
      horizontal={variant === 'variant1'}
      scrollEnabled={variant === 'variant1'}
      renderItem={(item) => (
        <ShopProductPreview
          key={item}
          product={product}
          variant={variant}
          showLike={showLike}
        />
      )}
    />
  );
};

export default ShopProductPreviewList;
