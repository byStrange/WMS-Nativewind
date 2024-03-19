import React, { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";

const ShopProductPreview = ({ product, variant, showLike }) => {
  const [isLiked, setIsliked] = useState(false);
  return (
    <View
      style={{
        overflow: "hidden",
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "rgba(0,0,0,0.1)",
        maxWidth: variant === "variant1" ? 153 : "auto",
        flex: 1,
      }}
    >
      <View style={{ overflow: "hidden" }}>
        <View
          style={{
            position: "relative",
            height: 170,
            width: "100%",
            backgroundColor: "#F6F6F6",
          }}
        >
          <Image
            source={{ uri: product.image }}
            style={{ width: "100%", height: "100%", resizeMode: "cover" }}
          />
          {showLike && (
            <View style={{ position: "absolute", right: 10, top: 10 }}>
              <Pressable
                onPress={() => setIsliked(!isLiked)}
                style={{
                  borderRadius: 9999,
                  backgroundColor: "white",
                  padding: 8,
                }}
              >
                <View
                  style={{ width: 24, height: 24, backgroundColor: "blue" }}
                ></View>
              </Pressable>
            </View>
          )}
        </View>
      </View>
      <View
        style={{
          borderBottomLeftRadius: 4,
          borderBottomRightRadius: 4,
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "#EDEDED",
          padding: 8,
        }}
      >
        <Text style={{ fontSize: 12 }} numberOfLines={2}>
          {product.title}
        </Text>

        {variant === "variant2" && (
          <View style={{ marginTop: 10 }}>
            <Text
              style={{
                fontSize: 10,
                color: "#acacac",
                textDecorationStyle: "solid",
                textDecorationLine: "line-through",
                textDecorationColor: "#acacac",
              }}
            >
              99 000 so'm
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontWeight: "500", fontSize: 14 }}>
                89 000 so'm
              </Text>
            </View>
          </View>
        )}
        {variant === "variant2" && (
          <View
            style={{
              marginTop: 12,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
            >
              <View
                style={{ width: 24, height: 24, backgroundColor: "blue" }}
              ></View>
              <Text style={{ fontSize: 10 }}>4.9</Text>
              {/* <Icon icon="mdi:truck-fast" class="text-tertiary" height="14" /> */}
              <View
                style={{ width: 24, height: 24, backgroundColor: "blue" }}
              ></View>
            </View>
            {false && (
              <View
                style={{
                  borderRadius: 2,
                  backgroundColor: "orange",
                  padding: 2,
                  fontSize: 12,
                  color: "white",
                }}
              >
                kami bor
              </View>
            )}
          </View>
        )}
        {variant === "variant1" && (
          <View
            style={{
              flexDirection: "row",
              marginTop: 16,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View className="flex shrink-0 items-center gap-x-1 flex-row">
              <View className="w-6 h-6 bg-blue-300"></View>
              <Text class="text-[10px]">{product.rating}</Text>
            </View>
            {variant === "variant1" && (
              <View className="badge rounded-md bg-secondary px-2 py-1.5 text-xs font-medium">
                <Text>
                  {product.price.originalPrice}
                  {product.price.currency}
                </Text>
              </View>
            )}
          </View>
        )}
      </View>
    </View>
  );
};

export default ShopProductPreview;
