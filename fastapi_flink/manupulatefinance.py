import requests

url = "url_key_marketstack"


r = requests.get(url = url)

data = r.json()

full_data = data['data']


symbol = full_data[0]['symbol']

result = []

for x in full_data:
    # print(x['symbol'])
    result.append({"time" : x["date"], "open":x["open"], "high":x["high"], "low":x["low"], "close":x["close"], "volume":x["volume"]})


print(result)