import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { SourceReader, PapperBlock } from 'enl-components';
import { injectIntl } from 'react-intl';
import messages from './messages';
import { Traffic } from './demos';
import Info from './Info';

function TrafficIndicator(props) {
  const { intl } = props;
  const title = brand.name + ' - Map';
  const description = brand.desc;
  const docSrc = 'containers/Maps/demos/';
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
        overflowX
        icon="traffic"
        title={intl.formatMessage(messages.trafficIndicatorTitle)}
        desc={intl.formatMessage(messages.trafficIndicatorDesc)}
      >
        <Info />
        <Traffic />
        <SourceReader componentName={docSrc + 'Traffic.js'} />
      </PapperBlock>
    </div>
  );
}

TrafficIndicator.propTypes = {
  intl: PropTypes.object.isRequired
};

export default injectIntl(TrafficIndicator);
