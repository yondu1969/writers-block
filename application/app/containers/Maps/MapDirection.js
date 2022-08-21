import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { SourceReader, PapperBlock } from 'enl-components';
import { injectIntl } from 'react-intl';
import messages from './messages';
import { Direction } from './demos';
import Info from './Info';

function MapDirection(props) {
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
        title={intl.formatMessage(messages.directionDefaultTitle)}
        icon="directions"
        desc={intl.formatMessage(messages.directionDefaultDesc)}
      >
        <Info />
        <Direction />
        <SourceReader componentName={docSrc + 'Direction.js'} />
      </PapperBlock>
    </div>
  );
}

MapDirection.propTypes = {
  intl: PropTypes.object.isRequired
};

export default injectIntl(MapDirection);
