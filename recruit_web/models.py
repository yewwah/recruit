from django.db import models
from django.utils import timezone


class Post(models.Model):
    
    info = models.TextField()
    
    def __str__(self):
        return self.info