import nltk

class ner:

    def _extract_entity_names(self,t):
        entity_names = []
        
        if hasattr(t, 'node') and t.node:
            if t.node == 'NE':
                entity_names.append(' '.join([child[0] for child in t]))
            else:
                for child in t:
                    entity_names.extend(self._extract_entity_names(child))
                    
        return entity_names

    def initialize(self, sample):
        sentences = nltk.sent_tokenize(sample)
        tokenized_sentences = [nltk.word_tokenize(sentence) for sentence in sentences]
        tagged_sentences = [nltk.pos_tag(sentence) for sentence in tokenized_sentences]
        chunked_sentences = nltk.batch_ne_chunk(tagged_sentences, binary=True)
        entity_names = []
        for tree in chunked_sentences:
            # Print results per sentence
            # print _extract_entity_names(tree)
            
            entity_names.extend(self._extract_entity_names(tree))
        return entity_names
        
