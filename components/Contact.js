import React, { Component } from 'react';

import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { Card, FormLabel, FormInput, FormValidationMessage, Form, Button } from 'react-native-elements';
import LogoSpinner from './LogoSpinner';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: '#fff'
  }});

class ContactForm extends React.Component {
  
  state = {
    name: '',
    email: '',
    messageContent: '',
    receiveUpdates: false,
    isSubmitting: false,
    hasErrors: false,
    errorMessage: undefined
  }

  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, marginTop: 50}}>
          <LogoSpinner width={150} height={150} />
        </View>
          <KeyboardAvoidingView style={{flex: 2, marginTop: 50}}>
            <Card title="Get in touch" titleStyle={{fontSize: 24}} >
              <FormLabel labelStyle={{fontFamily: Platform.OS === "ios" ? 'HelveticaNeue' : 'sans-serif'}}>You</FormLabel>
              <FormInput onChangeText={(val) => this.setState({'name': val})} placeholder="Joe Smith" value={this.name} />

              <FormLabel labelStyle={{fontFamily: Platform.OS === "ios" ? 'HelveticaNeue' : 'sans-serif'}}>Your email address</FormLabel>
              <FormInput onChangeText={(val) => this.setState({'email': val})} placeholder="s.w.hawking@damtp.cam.ac.uk" value={this.email} />

              <FormLabel labelStyle={{fontFamily: Platform.OS === "ios" ? 'HelveticaNeue' : 'sans-serif'}}>What's up?</FormLabel>
              <FormInput containerStyle={{ }} inputStyle={{height:'30%'}
              } multiline onChangeText={(val) => this.setState({'messageContent': val})} placeholder="Hi! You should should..." value={this.messageContent} />

              <FormValidationMessage>{this.state.errorMessage}</FormValidationMessage>

              <Button title="Send" accessibilityLabel="Send your feedback to playsask">Send</Button>
            </Card>
          </KeyboardAvoidingView>
      </View>
    )
  }
}

export default ContactForm;