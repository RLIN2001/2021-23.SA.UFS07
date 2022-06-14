import React from 'react';
import PropTypes from 'prop-types';

export const Text=({})=>{
    return (
        <span>Hello World!</span>
    );
};

Text.PropTypes={

    label: PropTypes.string.isRequired,


}


Text.defaultProps = {

}