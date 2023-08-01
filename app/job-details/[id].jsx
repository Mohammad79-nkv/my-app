import { Stack, useRouter, useSearchParams, useLocalSearchParams } from "expo-router";
import {
  ActivityIndicator,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
} from "react-native";
import { useFetch } from "../../hook/useFetch";
import { COLORS, SIZES, icons } from "../../constants";
import { Company, JobTabs, ScreenHeaderBtn } from "../../components";
import { useEffect, useState } from "react";
import { View } from "react-native";

const JobDetails = () => {
  const params = useLocalSearchParams();
  const router = useRouter();


  const [refreshing, setRefreshing] = useState(false);

  const { data, isLoading, error, refetch } = useFetch("job-details", {
    job_id: params.id,
  });


  const onRefresh = () => {};

  useEffect(() => {
    alert("first")
    console.log("first")
  }, [])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      {/* <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />
          ),
          headerTitle: "",
        }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {isLoading ? (
            <ActivityIndicator size={"large"} color={COLORS.primary} />
          ) : error ? (
            <Text>Somthing went wrong</Text>
          ) : data?.length === 0 ? (
            <Text>There is no data</Text>
          ) : (
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
              <Company
                companyLogo={data[0].employer_logo}
                jobTitle={data[0].job_title}
                companyName={data[0].employer_name}
                location={data[0].job_country}
              />
              <JobTabs />
            </View>
          )}
        </ScrollView>
      </Stack.Screen> */}
    </SafeAreaView>
  );
};

export default JobDetails;
