import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Form, Item, Input, Body, Text, CheckBox, Button} from 'native-base';

class AuthScene extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}></View>

        <View style={styles.middle}>
          <Text style={styles.textContainer}>You are ready to go</Text>

          <View style={styles.formArea}>
            <Text style={[styles.textContainer, styles.signin]}>Sign in</Text>
            <Form style={styles.mainForm}>
              <Item style={styles.formItems}>
                <Input placeholder="Username" style={styles.Input} />
              </Item>
              <Item style={styles.formItems}>
                <Input placeholder="Password" style={styles.Input} />
              </Item>

              <View style={styles.loginAs}>
                <Text style={styles.loginText}>Login as</Text>
                <CheckBox checked={true} />
                <Body>
                  <Text style={styles.cboxText}>Admin</Text>
                </Body>
                <CheckBox checked={false} />
                <Body>
                  <Text style={styles.cboxText}>User</Text>
                </Body>
              </View>
              <View style={styles.Button}>
                <Button block style={styles.mainBtn}>
                  <Text style={styles.btnText}>Submit</Text>
                </Button>
              </View>
            </Form>
          </View>
        </View>
        <View style={styles.bottom}></View>
      </View>
    );
  }
}

export default AuthScene;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  top: {
    position: 'relative',
    backgroundColor: '#5257F2',
    paddingRight: 12.7,
    paddingLeft: 12.7,
    height: 250,
  },
  middle: {
    width: '100%',
    height: '100%',
    flex: 1,
    position: 'absolute',
    zIndex: 2,
    backgroundColor: 'transparent',
    paddingLeft: 26.3,
    paddingRight: 26.3,
  },
  bottom: {
    position: 'relative',
    height: '100%',
    paddingRight: 12.7,
    paddingLeft: 12.7,
    backgroundColor: '#5257F2',
  },
  textContainer: {
    color: '#FCFDFF',
    fontFamily: 'GoogleSans-Bold',
    fontSize: 24,
    marginBottom: 30,
    position: 'relative',
    top: '20%',
    alignSelf: 'center',
  },
  formArea: {
    alignSelf: 'center',
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    top: '20%',
    paddingBottom: 40,
  },
  signin: {
    top: 0,
    color: '#2D3057',
    marginTop: 15,
  },
  formItems: {
    marginTop: 15,
    borderBottomColor: '#2D3057',
  },
  Input: {
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
  },
  loginAs: {
    paddingLeft: 46.6,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 20,
    alignItems: 'center',
  },
  loginText: {
    color: '#2D3057',
    fontSize: 10,
    fontFamily: 'GoogleSans-Bold',
    fontWeight: 'bold',
  },
  cboxText: {
    fontFamily: 'GoogleSans-Medium',
    fontSize: 10,
  },
  Button: {
    padding: 30.8,
    borderRadius: 4,
  },
  mainBtn: {
    backgroundColor: '#1DDCAF',
  },
  btnText: {
    color: '#2D3057',
    fontFamily: 'GoogleSans-Medium',
    fontSize: 12,
  },
});
