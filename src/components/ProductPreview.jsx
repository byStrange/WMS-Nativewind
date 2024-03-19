import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
// import { Iconify } from "react-native-iconify";

const ProductCard = ({ product, showLikeButton, showRemoveButton }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const openSpamModal = () => {
    // Implement your logic for opening the spam modal
  };

  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderColor: "#ddd",
        marginTop: 5,
        paddingBottom: 4,
        maxWidth: 305,
        maxHeight: 100,
        borderRadius: 20,
        backgroundColor: "#fff",
        paddingTop: 2.5,
      }}
    >
      <View style={{ flexDirection: "row", paddingHorizontal: 3 }}>
        <View
          style={{
            minHeight: 88,
            width: "25%",
            minWidth: 80,
            maxWidth: 115,
            overflow: "hidden",
            borderRadius: 10,
            backgroundColor: "#eee",
          }}
        >
          <Image
            source={{
              uri: product?.image || "https://via.placeholder.com/300",
            }}
            style={{ width: "100%", height: "100%", borderRadius: 10 }}
          />
        </View>
        <View style={{ flex: 1, marginLeft: 5 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 14 }}>{product?.title}</Text>
            {showLikeButton && (
              <TouchableOpacity onPress={() => {}}>
                {/* <Iconify icon="heart" size={18} /> */}
              </TouchableOpacity>
            )}
            {showRemoveButton && (
              <TouchableOpacity onPress={() => {}}>
                {/* <Iconify icon="times-circle" size={18} color="#ACACAC" /> */}
              </TouchableOpacity>
            )}
            {!showLikeButton && !showRemoveButton && (
              <View style={{ position: "relative" }}>
                <TouchableOpacity
                  onPress={() => setDropdownOpen(!dropdownOpen)}
                >
                  {/* <Iconify  icon="ellipsis-v" size={18} /> */}
                </TouchableOpacity>
                {dropdownOpen && (
                  <View
                    style={{
                      position: "absolute",
                      bottom: -2,
                      right: 0,
                      width: 200,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        openSpamModal();
                        setDropdownOpen(false);
                      }}
                    >
                      <Text>spam</Text>
                      {/* <Iconify icon="spam" size={18} /> */}
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            )}
          </View>
          <View
            style={{
              marginTop: 2.5,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text>{product?.city}</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 5,
              }}
            >
              <View
                style={{
                  width: 1,
                  height: 1,
                  borderRadius: 1,
                  backgroundColor: "#666",
                }}
              />
              <Text>{product?.date}</Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 6,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginRight: 5,
              }}
            >
              <Text style={{ fontWeight: "bold" }}>{product?.price}</Text>
              {/* <Iconify icon="apple" size={18} /> */}
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: 5,
                }}
              >
                {/* <Iconify icon="comments" size={18} /> */}
                <Text>{product?.comments}</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                {/* <Iconify icon="bookmark-o" size={18} /> */}
                <Text>{product?.saved}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;
