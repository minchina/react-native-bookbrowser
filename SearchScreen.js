/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React = require('react-native');
var {
    StyleSheet,
    Text,
    TextInput,
    View,
    } = React;
var ResultScreen = require('./ResultsScreen');

var SearchScreen = React.createClass({

    gotoResultScreen : function(searchPhrase){
      this.props.navigator.push({
          title: 'Results',
          component: ResultScreen,
          passProps:{'searchPhrase':searchPhrase}
      })
    },
    render: function () {
        return (
            <View style={styles.container}>
                <Text style={styles.headline}>
                    BookBrowser
                </Text>
                <Text style={styles.label}>
                    Find books containing:
                </Text>
                <TextInput style={styles.textInput}
                           placeholder={this.props.placeholder}
                           returnKeyType="search"
                           enablesReturnKeyAutomatically={true}
                           onEndEditing={event =>
          this.gotoResultScreen(event.nativeEvent.text)}/>
            </View>
        )
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#5AC8FA'
    },
    textInput: {
        height: 40,
        borderWidth: 0.5,
        marginLeft: 60,
        marginRight: 60,
        borderColor: '#8E8E93',
        backgroundColor: '#FFF',
        padding: 8
    },
    headline: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 28
    },
    label: {
        fontSize: 24,
        fontWeight: 'normal',
        color: '#FFF',
        marginBottom: 8
    },
    navContainer:{
        flex:1
    }
});

module.exports = SearchScreen;