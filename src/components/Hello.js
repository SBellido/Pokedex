import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from "prop-types";

export default function Hello(props) {
  // const { name } = props;
   const { firstname, lastname } = props;

    return (
      <View>
        <Text> 
          Hola {firstname} {lastname}
        </Text>
      </View>
    );
}

// Hello.defaultProps = {
//   firstname: "Sebastián",
//   lastname: "Bellido",
// };

Hello.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string,
};
