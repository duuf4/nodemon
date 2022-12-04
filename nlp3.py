import spacy
from spacy import displacy

nlp = spacy.load("en_core_web_sm")


doc = nlp(u'Book a table at the restaurant and the taxi to the hotel')
displacy.serve(doc, style='dep')