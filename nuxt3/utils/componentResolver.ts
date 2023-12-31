import * as components from '.';

const componentMapping = {
  'ComponentHeroHero1': 'Hero1',
  'ComponentHeroHero2': 'Hero2',
  'ComponentHeroHero3': 'Hero3',
  'ComponentHeroHero4': 'Hero4',
  'ComponentHeroHero5': 'Hero5',
  'ComponentHeroHero6': 'Hero6',
  'ComponentSliderSliderDeCartes': 'SliderCards',
  'ComponentComposantAvantages': 'Advantages',
};

export function resolveComponent(name) {
  const componentName = componentMapping[name];
  return components[componentName];
}