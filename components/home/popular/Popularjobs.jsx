import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";


import styles from "./popularjobs.style";
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";

const Popularjobs = () => {
  const isLoading = false;
  const error = false;

  return (
    <View className={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show more</Text>
        </TouchableOpacity>
      </View>
      <View>
        {isLoading ? (
          <ActivityIndicator size={"large"} color={COLORS.primary} />
        ) : error ? (
          <Text>Somting went wrong</Text>
        ) : (
          <FlatList
            data={[1, 2, 3, 4, 5]}
            renderItem={({ item }) => <PopularJobCard />}
            keyExtractor={item => item}
            horizontal
            contentContainerStyle={{columnGap: SIZES.medium}}
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
