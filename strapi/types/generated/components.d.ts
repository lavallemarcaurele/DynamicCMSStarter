import type { Schema, Attribute } from '@strapi/strapi';

export interface ComposantAvantages extends Schema.Component {
  collectionName: 'components_composant_avantages';
  info: {
    displayName: 'Avantages';
    icon: 'crown';
  };
  attributes: {
    advantage: Attribute.Component<'utils.avantage', true> & Attribute.Required;
  };
}

export interface HeroHero1 extends Schema.Component {
  collectionName: 'components_hero_hero_1s';
  info: {
    displayName: 'Hero 1';
    icon: 'expand';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.String;
    image: Attribute.Media & Attribute.Required;
    button: Attribute.Component<'utils.button'>;
    position: Attribute.Enumeration<['left', 'right']> &
      Attribute.Required &
      Attribute.DefaultTo<'left'>;
  };
}

export interface HeroHero2 extends Schema.Component {
  collectionName: 'components_hero_hero_2s';
  info: {
    displayName: 'Hero 2';
    icon: 'expand';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.String;
    image: Attribute.Media & Attribute.Required;
    button: Attribute.Component<'utils.button'>;
    position: Attribute.Enumeration<['left', 'right']> &
      Attribute.Required &
      Attribute.DefaultTo<'left'>;
  };
}

export interface HeroHero3 extends Schema.Component {
  collectionName: 'components_hero_hero_3s';
  info: {
    displayName: 'Hero 3';
    icon: 'expand';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.String;
    image: Attribute.Media & Attribute.Required;
    button: Attribute.Component<'utils.button'>;
  };
}

export interface HeroHero4 extends Schema.Component {
  collectionName: 'components_hero_hero_4s';
  info: {
    displayName: 'Hero 4';
    icon: 'expand';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.String;
    image: Attribute.Media & Attribute.Required;
    button: Attribute.Component<'utils.button'>;
  };
}

export interface HeroHero5 extends Schema.Component {
  collectionName: 'components_hero_hero_5s';
  info: {
    displayName: 'Hero 5';
    icon: 'expand';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.String;
    images: Attribute.Media & Attribute.Required;
    button: Attribute.Component<'utils.button'>;
  };
}

export interface HeroHero6 extends Schema.Component {
  collectionName: 'components_hero_hero_6s';
  info: {
    displayName: 'Hero 6';
    icon: 'expand';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.String;
    image: Attribute.Media & Attribute.Required;
    button: Attribute.Component<'utils.button'>;
    position: Attribute.Enumeration<['top', 'bot']> &
      Attribute.Required &
      Attribute.DefaultTo<'top'>;
  };
}

export interface SliderSliderDeCartes extends Schema.Component {
  collectionName: 'components_slider_slider_de_cartes';
  info: {
    displayName: 'Slider de cartes';
    icon: 'stack';
  };
  attributes: {
    uptitle: Attribute.String;
    title: Attribute.String & Attribute.Required;
    cards: Attribute.Component<'utils.cartes', true> & Attribute.Required;
  };
}

export interface UtilsAvantage extends Schema.Component {
  collectionName: 'components_utils_avantages';
  info: {
    displayName: 'Avantage';
  };
  attributes: {
    icon: Attribute.Enumeration<['heart', 'smiley']> &
      Attribute.Required &
      Attribute.DefaultTo<'heart'>;
    title: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
  };
}

export interface UtilsButton extends Schema.Component {
  collectionName: 'components_utils_buttons';
  info: {
    displayName: 'button';
    icon: 'link';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
  };
}

export interface UtilsCartes extends Schema.Component {
  collectionName: 'components_utils_cartes';
  info: {
    displayName: 'Cartes';
    icon: 'picture';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    description: Attribute.String;
    button: Attribute.Component<'utils.button'> & Attribute.Required;
  };
}

export interface UtilsLinks extends Schema.Component {
  collectionName: 'components_utils_links';
  info: {
    displayName: 'Links';
    icon: 'link';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'composant.avantages': ComposantAvantages;
      'hero.hero-1': HeroHero1;
      'hero.hero-2': HeroHero2;
      'hero.hero-3': HeroHero3;
      'hero.hero-4': HeroHero4;
      'hero.hero-5': HeroHero5;
      'hero.hero-6': HeroHero6;
      'slider.slider-de-cartes': SliderSliderDeCartes;
      'utils.avantage': UtilsAvantage;
      'utils.button': UtilsButton;
      'utils.cartes': UtilsCartes;
      'utils.links': UtilsLinks;
    }
  }
}
