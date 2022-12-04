import spacy
from spacy import displacy

nlp = spacy.load("en_core_web_sm")

example_doc = nlp(u'car truck google')

for t1 in example_doc:
    for t2 in example_doc:
        similarity_perc = int(t1.similarity(t2)*100)
        print ("word {} is {}%  similar to word {}".
               format(t1.text, similarity_perc, t2.text))