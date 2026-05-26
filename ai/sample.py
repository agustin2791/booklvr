# list of square soft even numbers 0 - 20

event_list = [x**2 for x in range(20) if x % 2 == 0]

# some dict items a b c (keys) val = 1, 2, 3
some_dict = {
    'a': 1,
    'b': 2,
    'c': 3
}
def invert_dict(some):
    n_vals = list(some)

    output = {}
    for x in n_vals:
        output[some.get(x)] = x
    return output

print(invert_dict(some_dict))

class Person():
    # name and age
    # def greet
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        return f'Hello, my name is {self.name} and I am {self.age} years old'

new_person = Person('Jesus', 33)
print(new_person.greet())

try:
    filename = 'somefile.txt'
    frequency = {}
    with open(filename, 'wt') as file:
        words = file.read().split(' ')
        for i in words:
            if i in frequency:
                frequency[i] += 1
            else:
                frequency[i] = 1
except:
    print('no file found')
finally:
    print(frequency)

list_t = [(1, 'b'), (3, 'a'), (2, 'c')]

sort_list = [lambda x, y: x[1] > y[1]]
sort_list = sorted(list_t, key=lambda x: x[1])
print(sort_list)

def validate_email(email):
    import re
    regex_email = "^([A-Z][a-z])+('@')([a-z])2+('.')([a-z])$"

    if re.match(regex_email, email):
        return True
    return False

sample_email = 'jesus.diaz@gmail.com'

print(validate_email(sample_email))