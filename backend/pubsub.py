import time
from pubnub.pubnub import PubNub
from pubnub.pnconfiguration import PNConfiguration
from pubnub.callbacks import SubscribeCallback

pnconfig = PNConfiguration()
pnconfig.subscribe_key = 'sub-c-c3fa21a7-2404-43d2-b815-8a8540a44557'
pnconfig.publish_key = 'pub-c-ed11e948-9609-4e64-9866-9e746bc8834a'
pubnub = PubNub(pnconfig)

TEST_CHANNEL = 'TEST_CHANNEL'

pubnub.subscribe().channels([TEST_CHANNEL]).execute()



class Listener(SubscribeCallback):
	def message(self, pubnub, message_object):
		print(f'\n-- Incoming message_object: {message_object}')

pubnub.add_listener(Listener())

def main():
	time.sleep(1)
	pubnub.publish().channel(TEST_CHANNEL).message({'foo':'bar'}).sync()


if __name__=='__main__':
	main()