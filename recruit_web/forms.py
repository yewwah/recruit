from django import forms

from .models import Post

class PostForm(forms.ModelForm):
    
    info = forms.CharField(max_length=7500)
    class Meta:
        model = Post
        fields = ('info',)