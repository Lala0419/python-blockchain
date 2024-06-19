import hashlib
import json


def crypto_hash(*args):
	"""
	Return a sha-256 hash of the given arguments
	"""
	stringified_args = sorted(map(lambda data: json.dumps(data), args))
	
	joined_data = ''.join(stringified_args)

	# print(f'join_data: {joined_data}')

	return hashlib.sha256(joined_data.encode('utf-8')).hexdigest() 
	# sha256()--> 256 of, 0 and 1, bits. hexdigest() -->64 char so every 4 bits is represented by 1 hexdigit(anything from 0 to 9 and A to F)
	# it is a one way function from data to sha256.  meaning it can generate a hash from
	# the data but you can't decrypt that hash and get the original data back just by looking at it.
	# So it only works one way from the data to the hash if you have the resulting hash.


def main():
	print( f"crypto_hash('foo','genesis_hash', 1716248240419615000): {crypto_hash('foo','genesis_hash', 1716248240419615000)}")
	

if __name__ == '__main__':
	main()
