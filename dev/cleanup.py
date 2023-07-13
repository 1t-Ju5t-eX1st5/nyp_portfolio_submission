import os

def cleanup(files):
    for file in files:
        try:
            if os.path.exists(file):
                os.remove(file)
            else:
                print(f"File not found, skipping\nSkipped file: {file}")
        except Exception as e:
            print(f"Error thrown: {e}")
            continue
    print("Cleanup complete")

if __name__ == "__main__":
    files = ['admin.html', 'about.html', 'index.html', 'projects.html', 'events.html', "my-journey.html"]
    cleanup(files)