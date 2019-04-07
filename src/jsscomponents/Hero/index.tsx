import * as React from 'react';
import { Image } from '@sitecore-jss/sitecore-jss-react';

type HeroFields = {
  image: { value: { src: string, alt: string } };
}
type HeroProps = {
  fields: HeroFields;
};

const Hero: React.FunctionComponent<HeroProps> = (props) => {
    return (
        <div id="hero" className="o-hero h-ph h-pv-d">	
          <div className="o-hero__image">          
            <picture>
            <Image
            field={props.fields.image}
            className="img-fluid"
          />
            </picture>
          </div>
          <div className="o-hero__wrapper">		
            <h1 className="noselect">Welcome to Umbrella for Sitecore JSS</h1>
            <div className="o-hero__info a-text-small noselect">Thanks for using JSS. Here are some resources to get you started</div>		
          </div>	
        </div>
      )
}

export default Hero;
