import time
import subprocess
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
import os

class ChangeHandler(FileSystemEventHandler):
    def __init__(self):
        self.last_modified = time.time()

    def on_modified(self, event):
        if time.time() - self.last_modified < 5:
            return
        self.last_modified = time.time()
        subprocess.call(['bash', 'auto_commit.sh'])

if __name__ == "__main__":
    path = "D:/the_code/syncit/cohort"
    os.chdir(path)
    event_handler = ChangeHandler()
    observer = Observer()
    observer.schedule(event_handler, path=path, recursive=True)
    observer.start()
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
    observer.join()
