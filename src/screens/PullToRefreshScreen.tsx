import React, {useState} from 'react';
import {RefreshControl, ScrollView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import HeaderTitle from '../components/HeaderTitle';

export default function PullToRefreshScreen() {
  // const {top}= useSafeAreaInsets()
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>('');
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      setData('Hola Mundo');
    }, 3000);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        /*  style={{
         marginTop:refreshing ? top : 0
       }} */

        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            progressViewOffset={10}
            progressBackgroundColor="#5856D6"
            colors={['white', 'red', 'orange']}
            style={{backgroundColor: '#5856D6'}}
            tintColor="white"
            title="Refreshing"
          />
        }>
        <View>
          <HeaderTitle title="Pull to refresh" />
          {data ? <HeaderTitle title={data} /> : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
