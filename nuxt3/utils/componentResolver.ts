import * as components from '.';

const componentMapping = {
  'ComponentHeroHero1': 'Hero1',
  'ComponentHeroHero2': 'Hero2',
  'ComponentHeroHero3': 'Hero3',
  'ComponentHeroHero4': 'Hero4',
};

export function resolveComponent(name) {
  const componentName = componentMapping[name];
  return components[componentName];
}