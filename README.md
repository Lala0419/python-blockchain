**Activate the virtual enviroment**

```
source blockchain-env/bin/activate
```

**Install all the package**

```
pip3 install -r requirements.txt
```

**Run the test**

Make sure to activate the virtual environment.

```
source blockchain-env/bin/activate
```

To check, you can run

```
echo $VIRTUAL_ENV
```

if you get nothing back, means you are not in it.

Run the test

```
python3-m pytest backent/tests
```

**Run the application and API**

Make sure to activate the virtual enviroment.

```
python3 -m backend.app
```

**Run a peer instance**

Make sure to activate the virtual environment.

```
export PEER=True && python3 -m backend.app
```

**Run the frontend**

In the frontend directory:

```
cd frontend
```

and run

```
npm run start

```

**Seed the backend with data**

Make sure to activate the virtual environment.

```

export SEED_DATA=True && python3 -m backend.app

```
