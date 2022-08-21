import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { SourceReader, PapperBlock } from 'enl-components';
import { injectIntl } from 'react-intl';
import messages from './messages';
import { CommonBadges, VariantBadges } from './demos';

function Badges(props) {
  const title = brand.name + ' - UI Elements';
  const description = brand.desc;
  const docSrc = 'containers/UiElements/demos/Badges/';
  const { intl } = props;
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <PapperBlock
        title={intl.formatMessage(messages.badgesCommonTitle)}
        icon="info"
        desc={intl.formatMessage(messages.badgesCommonDesc)}
      >
        <div>
          <CommonBadges />
          <SourceReader componentName={docSrc + 'CommonBadges.js'} />
        </div>
      </PapperBlock>
      <PapperBlock
        title={intl.formatMessage(messages.badgesVariantTitle)}
        icon="info"
        desc={intl.formatMessage(messages.badgesVariantDesc)}
      >
        <div>
          <VariantBadges />
          <SourceReader componentName={docSrc + 'VariantBadges.js'} />
        </div>
      </PapperBlock>
    </div>
  );
}

Badges.propTypes = {
  intl: PropTypes.object.isRequired
};

export default injectIntl(Badges);
