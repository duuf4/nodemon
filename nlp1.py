import spacy

nlp = spacy.load("en_core_web_sm")

doc = nlp(u'I am learning how to build chatbots')

for token in doc:
    print(token.text, token.pos_)