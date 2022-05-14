import React from 'react';
import {SafeAreaView, View} from 'react-native';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import {InputText, Typography} from './src/components/common';

const App = () => {
  // useEffect(() => {
  //   const hideSplash = async () => {
  //     await RNBootSplash.hide({fade: true});
  //   };
  //   hideSplash().catch(console.log);
  // }, []);
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <SafeAreaView>
        <View>
          <Typography color={'black'} weight={'bold'} size={27}>
            Fix bugs from dev-1
          </Typography>

          <InputText label={'Email'} />
        </View>
      </SafeAreaView>
    </ApplicationProvider>
  );
};

export default App;
