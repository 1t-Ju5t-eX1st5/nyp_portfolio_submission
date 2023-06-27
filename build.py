from jinja2 import Environment, PackageLoader, select_autoescape
def build():
    env = Environment(
        loader=PackageLoader('build'),
        autoescape=select_autoescape())
    index = env.get_template("base.html")
    with open('index.html', 'w') as f:
        f.write(index.render())

if __name__ == '__main__':
    build()