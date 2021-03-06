import React from 'react';
import PropTypes from 'prop-types';
import DocumentBody from '../components/DocumentBody';

const Document = props => {
    const {
        pageContext: {
            __refDocMapping,
            metadata: { slugToTitle: slugTitleMapping },
        },
        ...rest
    } = props;

    return (
        <div className="document">
            <DocumentBody
                refDocMapping={__refDocMapping}
                slugTitleMapping={slugTitleMapping}
                {...rest}
            />
        </div>
    );
};

Document.propTypes = {
    pageContext: PropTypes.shape({
        __refDocMapping: PropTypes.shape({
            ast: PropTypes.shape({
                children: PropTypes.array,
            }).isRequired,
        }).isRequired,
        slugTitleMapping: PropTypes.shape({
            [PropTypes.string]: PropTypes.string,
        }),
    }).isRequired,
};

export default Document;
