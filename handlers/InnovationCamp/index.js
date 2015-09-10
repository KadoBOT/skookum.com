/** @flow */
require('./styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';
import api from 'api';
import ContactForm from 'ContactForm';
import lookup from 'lookup';
import Hero from 'Hero';
import CapabilityHighlights from 'CapabilityHighlights';
import markdown from 'markdown';

class InnovationCamp extends React.Component {
  render(): ReactElement {

    var heroInfo = this.props.heroInfo[0];
    var capabilityHighlights = this.props.capabilityHighlights;
    return (
      <div className="InnovationCamp">
        <Hero color="black" 
          image={lookup(heroInfo, 'image.fields.file.url') || '/public/images/hero-default.png'}
          videos={lookup(heroInfo, 'videos')}
          poster={lookup(heroInfo, 'poster.fields.file.url')}
          title={heroInfo.title} 
          subtitle={lookup(heroInfo, 'subtitle')} />

        <div className="InnovationCamp-statement">
          Innovation camp is a one week program to help propel innovative ideas forward.
        </div>

        <div className="InnovationCamp-title">The Schedule</div>

        <CapabilityHighlights highlights={capabilityHighlights} />

        <div className="InnovationCamp-contact">
          <ContactForm header="Interested in more information?" labelColor="#fff" />
        </div>
      </div>
    );
  }
}

InnovationCamp.propTypes = {};

InnovationCamp.displayName = 'InnovationCamp';

export default Resolver.createContainer(InnovationCamp, {
  resolve: {
    heroInfo() {
      return api(`contentful/hero/innovation-camp`);
    },
    capabilityHighlights() {
      return api(`contentful/capability_highlights/innovation-camp`);
    },
  },
});