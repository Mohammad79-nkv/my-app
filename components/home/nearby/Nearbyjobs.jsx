import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";

import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/nearby/NearbyJobCard";
import { useFetch } from "../../../hook/useFetch";
import styles from "./nearbyjobs.style";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";

const Nearbyjobs = () => {
  const { data, isLoading, error } = useFetch("search", {
    query: "React developer",
    num_pages: 1,
  });

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
          data?.map((job) => <NearbyJobCard job={job}/>)
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
