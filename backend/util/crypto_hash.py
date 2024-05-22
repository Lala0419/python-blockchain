import hashlib
import json


def crypto_hash(*args):
	"""
	Return a sha-256 hash of the given arguments
	"""
	stringified_args = sorted(map(lambda data: json.dumps(data), args))
	
	joined_data = ''.join(stringified_args)

	print(f'join_data: {joined_data}')

	return hashlib.sha256(joined_data.encode('utf-8')).hexdigest()


def main():
	print( f"crypto_hash('foo','genesis_hash', 1716248240419615000): {crypto_hash('foo','genesis_hash', 1716248240419615000)}")
	

if __name__ == '__main__':
	main()
