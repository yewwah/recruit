from django.shortcuts import render
from ner import ner
from django.template.context_processors import csrf
from forms import PostForm

# Create your views here.

def base(request):
    return render(request, 'web/base.html')
def index(request):
    return render(request, 'web/index1.html', {})

def forms(request):
    form = PostForm()
    return render(request, 'web/pages/forms.html', {'form' : PostForm})

def test(request):
    haha = "<h1>hahahahahahah</h1>"
    return render(request, 'web/test.html', {'test': haha})

def submit(request):
    # if this is a POST request we need to process the form data
    
        # create a form instance and populate it with data from the request:
    if request.method == 'POST':
        form = PostForm(request.POST)
        text = form['info'].value()
    #     # check whether it's valid:
    #     if form.is_valid():
    #         # process the data in form.cleaned_data as required
    #         # ...
    #         # redirect to a new URL:
    #         return HttpResponseRedirect('/thanks/')

    # # if a GET (or any other method) we'll create a blank form
    # else:
    #     form = NameForm()
        text = str(text)
        ner1 = ner()
        entities = ner1.initialize(text)
        for entity in entities:
            print entity
            text = text.replace(str(entity), '<b><font color="green">' + str(entity) + "</font></b>")
        text = str(text)
        print text
    return render(request, 'web/pages/submit1.html', {'text' : text})

    