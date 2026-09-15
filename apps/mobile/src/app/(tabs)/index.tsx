import { Play, Plus } from 'lucide-react-native';
import { View } from 'react-native';

import { Button } from '../../shared/ui';
import { Header } from '../../widgets/header';
import ScreenLayout from '../screen-layout';

export default function Index() {
  return (
    <ScreenLayout>
      <Header />

      <View style={{ marginTop: 60 }}>
        <Button
          icon={Play}
          onPress={() => {}}
        >
          Watch Movie
        </Button>

        <Button
          variant='secondary'
          icon={Plus}
          onPress={() => {}}
        />
      </View>
    </ScreenLayout>
  );
}

// const styles = StyleSheet.create({
//   item: {
//     color: '#a1a1aa',
//     fontSize: 16,
//     paddingVertical: 4,
//   },
// });
