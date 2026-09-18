import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';

import { SPACE } from '@app/tokens';

import ScreenLayout from '../screen-layout';

import { MOCK_SAMPLE_TITLES, TitleCard } from '@/entities/title-card';
import { CarouselSection, Header, HeroSlider } from '@/widgets';

const sections = [
  { title: 'Top picks for you', data: MOCK_SAMPLE_TITLES },
  { title: 'Popular now', data: MOCK_SAMPLE_TITLES },
];

export default function Index() {
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(e => {
    scrollY.set(e.contentOffset.y);
  });

  return (
    <ScreenLayout edges={[]}>
      <Header scrollY={scrollY} />

      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SPACE[18] }}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        <HeroSlider items={MOCK_SAMPLE_TITLES} />

        {sections.map(section => (
          <CarouselSection
            key={section.title}
            title={section.title}
            onPress={() => {}}
          >
            {section.data.map(title => (
              <TitleCard
                key={title.id}
                onPress={() => {}}
                title={title}
              />
            ))}
          </CarouselSection>
        ))}
      </Animated.ScrollView>
    </ScreenLayout>
  );
}
