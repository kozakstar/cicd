import React from 'react';
import {Button, SafeAreaView, View} from 'react-native';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import {InputText, Typography} from './src/components/common';
import Crash from 'appcenter-crashes';

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
          <Typography color={'black'} size={27}>
            Hello World
          </Typography>

          <InputText label={'Email'} />
          <Button
            title={'Crash'}
            onPress={() => {
              Crash.generateTestCrash().catch(console.log);
            }}
          />
        </View>
      </SafeAreaView>
    </ApplicationProvider>
  );
};

export default App;
