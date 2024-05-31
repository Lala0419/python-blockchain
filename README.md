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
