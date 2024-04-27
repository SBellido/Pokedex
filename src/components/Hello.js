import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import PropTypes from "prop-types";

export default function Hello(props) {
  // const { name } = props;
   const { firstname, lastname } = props;

    return (
      <SafeAreaView>
        <Text> 
          Hola {firstname} {lastname}
        </Text>
      </SafeAreaView>
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
