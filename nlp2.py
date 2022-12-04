import spacy

nlp = spacy.load("en_core_web_sm")

doc = nlp(u'Book a table at the restaurant and the taxi to the hotel')

tasks = doc[2], doc[8]
tasks_target = doc[5], doc[11]

for task in tasks_target:
    for tok in tasks:
        print("Booking of {} belongs to {}".format(tok, task))
    break