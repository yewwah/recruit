from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'web/index.html', {})

def forms(request):
    return render(request, 'web/pages/forms.html', {})

def test(request):
	haha = "<h1>hahahahahahah</h1>"
	return render(request, 'web/test.html', {'test':haha})