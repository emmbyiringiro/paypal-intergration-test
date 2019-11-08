import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {requestOneTimePayment} from 'react-native-paypal';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class PayPalPayment extends Component {
  state = {paymentPending: false};
  payWithPayPal = async () => {
    this.setState({paymentPending: true});
    const token = 'sandbox_yk7hth4p_jnnymjbgfg648byx';

    try {
      const {
        nonce,
        payerId,
        email,
        firstName,
        lastName,
        phone,
      } = await requestOneTimePayment(token, {
        amount: '20', // required
        // any PayPal supported currency (see here: https://developer.paypal.com/docs/integration/direct/rest/currency-codes/#paypal-account-payments)
        currency: 'GBP',
        // any PayPal supported locale (see here: https://braintree.github.io/braintree_ios/Classes/BTPayPalRequest.html#/c:objc(cs)BTPayPalRequest(py)localeCode)
        localeCode: 'en_GB',
        shippingAddressRequired: false,
        userAction: 'commit', // display 'Pay Now' on the PayPal review page
        // one of 'authorize', 'sale', 'order'. defaults to 'authorize'. see details here: https://developer.paypal.com/docs/api/payments/v1/#payment-create-request-body
        intent: 'authorize',
      });
      this.setState({paymentPending: false});
    } catch (error) {
      this.setState({paymentPending: false});
      alert(error);
    }
  };
  render() {
    return (
      <View style>
        <Button
          containerStyle={{alignContent: 'center', justifyContent: 'center'}}
          type="outline"
          icon={
            <Icon name="paypal" size={25} color="black" type="font-awesome" />
          }
          onPress={this.payWithPayPal}
          title=" Pay now - 20 GBP"
          loading={this.state.paymentPending}
        />
      </View>
    );
  }
}
